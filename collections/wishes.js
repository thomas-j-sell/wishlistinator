Wishes = new Mongo.Collection('wishes');

WishSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  author: {
    type: String,
    autoValue: function () {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  claimed: {
    type: Boolean,
    autoValue: function() {
      return false
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
  deleteWish: function(id) {
    Wishes.remove(id);
  }
});

Wishes.attachSchema( WishSchema );
