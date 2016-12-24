Template.wish.events({
  'click .fa-trash' : function() {
    Meteor.call('deleteWish', this._id);
  }
});
