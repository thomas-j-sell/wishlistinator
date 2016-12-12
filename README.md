# Wishlistinator
Wishlistinator is a group wish list management app.  User's can create wish lists, and view lists created by others.  Users can also mark items in others wishlists as "purchased".  "Purchased" status will be visible to everyone except the owner of the list.  This way users will not know what they will be receiving, but won't receive multiples of the same thing from the group.  The idea is to facilitate gift giving in families or other close groups during the holidays

### Goals
* Users need to be able to create a list of wishes they would like to receive
* wishes consist of:
  - Name: name or title of the good or service you wish to receive
  - Description: Any specificity you would like to add about the wish.  Should allow for links to product/service's website or storefronts that sell it.
* Users need to be able to view other user's lists.
* Users need to be able to mark wishes in other's lists as "purchased".
  - app should do something to facilitate scenario's where two people try to mark the same item as "purchased".  Perhaps send a notification to both parties, or someway to facilitate communication.
* Users need to be able to see what wishes have been "purchased" for others.
* Users must not be able to see what items on their list are marked as "purchased".

* App should support multiple holiday's, each with a specific list.  ex: Birthday list, Christmas list
* App should allow group to control upcoming holidays / add custom holidays.  ex: graduation, etc.
* App should allow users to port unpurchased items to next holiday's list
* App could allow user to create master wish list from which other lists could be built.  ( would need to propagate purchases upon holiday's conclusion )
* Ideally the app should allow you to join multiple groups and manage lists for each.

App needs a way to deal with the scenario where:
    1. User A removes an item from his/her list.
    2. User B has already marked that item as purchased.

    Options:
    - Users can't remove items from lists (not very user friendly)
    - Users can't remove items that have been marked as purchased (lets potentially unwanted cats out of the bad)
    - Lock lists / prevent removing items after a certain date, x days before the Holiday.

