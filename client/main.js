import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Meteor.subscribe("userList");
Meteor.subscribe("wishes");

Template.users.helpers({
  // returns list of users excluding current user
  users() {
    return Meteor.users.find({_id: { $ne: Meteor.userId() }});
  }
});
