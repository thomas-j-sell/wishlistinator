Template.newWish.events({
  'click .fa-close' : () => {
    Session.set('newWish', false);
  }
});
