import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Meteor.subscribe("userList");
Meteor.subscribe("wishes");

Template.wishes.helpers({
  wishes() {
    return Wishes.find({});
  }
});

Template.users.helpers({
  users() {
    console.log(Meteor.users.find());
    return Meteor.users.find();
  }
});
