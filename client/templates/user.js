Template.user.helpers({
  user(userId) {
    return Meteor.users.findOne({_id: userId});
  },
  wishes(userId) {
    return Wishes.find({"author": userId});
  }
});
