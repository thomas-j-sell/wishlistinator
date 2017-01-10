import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("userList", function() {
  return Meteor.users.find();
});

Meteor.publish("wishes", function wishesPublication() {
  return Wishes.find({});
});
