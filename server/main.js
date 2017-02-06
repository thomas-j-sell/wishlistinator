import { Meteor } from 'meteor/meteor';

// code to run on server at startup
Meteor.startup(() => {
  // load test data if it doesn't exist
  if (Meteor.users.find({}).count() === 0) {
    Meteor.call('seedTestData');
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
  }
});

Meteor.publish("userList", function() {
  return Meteor.users.find();
});

Meteor.publish("wishes", function wishesPublication() {
  return Wishes.find({});
});
