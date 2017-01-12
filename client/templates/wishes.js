Template.wishes.events({
  'click .new-wish': () => {
    Session.set('newWish', true);
  }
});

Template.wishes.helpers({
  wishes(userId) {
    return Wishes.find({author: Meteor.userId()});
  },
  ownsWish() {
    console.log(this);
    return Meteor.userId() === this.author;
  }
});
