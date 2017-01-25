Template.ownedWish.events({
  'click .fa-trash' : function () {
    Meteor.call('deleteWish', this._id);
  }
});

Template.unclaimedWish.events({
  'click #claim-btn' : function () {
    Wishes.update(this._id, {
      $set: {
        claimed: true,
        claimant: Meteor.userId()
      }
    });
  }
});

Template.claimedWish.events({
  'click #unclaim-btn' : function () {
    Wishes.update(this._id, {
      $set: {
        claimed: false,
        claimant: ""
      }
    });
  }
});

Template.claimedWish.helpers({
  ownedByUser(userId) {
    return (userId === Meteor.userId());
  },
  getUserName(userId){
    return Meteor.users.findOne({_id: userId}).username;
  }
});
