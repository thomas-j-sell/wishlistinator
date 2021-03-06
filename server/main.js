import { Meteor } from 'meteor/meteor';

// code to run on server at startup
Meteor.startup(() => {
  // load test data if it doesn't exist
  if (process.env.NODE_ENV === 'development' && Meteor.users.find({}).count() === 0) {
    Meteor.call('seedTestData');
  }
  // @TODO remove or change to 'beta' before releasing
  if (process.env.NODE_ENV === 'production') {
    Meteor.call("loadBetaUsers");
  }
});

Meteor.methods({
  'seedTestData': function () {
    console.log("loading development data");

    JSON.parse(Assets.getText("users.json")).users.forEach(function (doc) {
      var newUser = Accounts.createUser({
        "email": doc.email,
        "username": doc.username,
        "password": doc.password
      });
    });
    console.log("users loaded");

    JSON.parse(Assets.getText("wishes.json")).wishes.forEach(function (doc) {
      var claimant;
      if(doc.claimant) {
        claimant = Meteor.users.findOne({username: doc.claimant})._id;
      } else {
        claimant = "";
      }
      Wishes.insert({
        "name": doc.name,
        "desc": doc.desc,
        "author": Meteor.users.findOne({username: doc.author})._id,
        "claimed": doc.claimed,
        "claimant": claimant
      });
    });
    console.log("wishes loaded");
  },
  'reset': function() {
    Meteor.users.remove({});
    Wishes.remove({});
    Meteor.call('seedTestData');
  },
  'loadBetaUsers': function() {
    console.log("Creating new beta users");
    JSON.parse(Assets.getText("beta_users.json")).users.forEach( function (doc) {
      // only create user if it doesn't already exist
      console.log("processing: " + doc.username);
      if (!Meteor.users.findOne({"username": doc.username})) {
        console.log("creating: " + doc.username);
        Accounts.createUser({
          "email": doc.email,
          "username": doc.username,
          "password": doc.password
        });
      }
    });
  }
});

Meteor.publish("userList", function() {
  return Meteor.users.find();
});

Meteor.publish("wishes", function wishesPublication() {
  return Wishes.find({});
});
