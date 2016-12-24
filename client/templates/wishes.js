Template.wishes.events({
  'click .new-wish': () => {
    Session.set('newWish', true);
  }
});
