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

// @TODO remove allow not secure enough
Wishes.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  }
});

Wishes.attachSchema( WishSchema );
