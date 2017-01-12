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
      // only sets autovalue if one isn't provided
      // allows manual insertion of records
      if (!this.isSet && this.isInsert) {
        return this.userId
      }
    },
    autoform: {
      type: "hidden"
    }
  },
  claimed: {
    type: Boolean,
    autoValue: function() {
      if(!this.isSet) {
        return false
      }
    },
    autoform: {
      type: "hidden"
    }
  },
  claimant: {
    type: String,
    optional: true,
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
