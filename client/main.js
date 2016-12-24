import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';

Template.wishes.helpers({
  wishes() {
    return Wishes.find({});
  },
  users() {
    return Meteor.users.find({});
  }
});
