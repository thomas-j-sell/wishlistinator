import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe("userList");
Meteor.subscribe("wishes");

Template.wishes.helpers({
  wishes(userId) {
    return Wishes.find({author: Meteor.userId()});
  }
});

Template.users.helpers({
  // returns list of users excluding current user
  users() {
    return Meteor.users.find({_id: { $ne: Meteor.userId() }});
  }
});
