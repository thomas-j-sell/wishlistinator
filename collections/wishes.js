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
    // label: "Author",
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

Wishes.attachSchema( WishSchema );
