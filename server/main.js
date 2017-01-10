import { Meteor } from 'meteor/meteor';

// code to run on server at startup
Meteor.startup(() => {
  // load test data if it doesn't exist
  if (Meteor.users.find({}).count() === 0) {
    console.log("loading development data");

    JSON.parse(Assets.getText("users.json")).users.forEach(function (doc) {
      Accounts.createUser({
        "emails": doc.emails,
        "username": doc.username,
        "password": doc.password
      });
    });
    console.log("users loaded");

    JSON.parse(Assets.getText("wishes.json")).wishes.forEach(function (doc) {
      Wishes.insert({
        "name": doc.name,
        "desc": doc.desc,
        "author": Meteor.users.findOne({username: doc.author})._id
      });
    });
    console.log("wishes loaded");
  }
});

Meteor.publish("userList", function() {
  return Meteor.users.find();
});

Meteor.publish("wishes", function wishesPublication() {
  return Wishes.find({});
});
