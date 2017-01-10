Template.wish.events({
  'click .fa-trash' : function() {
    Meteor.call('deleteWish', this._id);
  }
});

Template.wish.helpers({
  ownsWish() {
    return Meteor.userId() === this.author;
  }
})
