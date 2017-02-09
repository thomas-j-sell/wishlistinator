module.exports = function () {

  this.Given(/^I navigate to the homepage$/, function () {
    browser.url("localhost:3000");
  });

  this.Then(/^The app dispays the homepage$/, function () {
    browser.waitForExist(".jumbotron", 1000);
    expect(browser.getTitle()).toEqual("Wishlistinator");
    expect(browser.getText('h1')).toEqual("Share your wishlists");
  });

  this.When(/^I click on the sign in button$/, function () {
    browser.waitForExist("#at-nav-button", 1000);
    browser.click('#at-nav-button');
  });

  this.When(/^I enter my credentials$/, function () {
    browser.waitForExist("#at-field-email", 1000);
    browser.setValue("#at-field-email", "tom@email.com");
    browser.setValue("#at-field-password", "password");
    browser.click("#at-btn");
  });

  this.Then(/^I should be signed in$/, function () {
    browser.waitUntil(function () {
      return browser.getText("#at-nav-button") === "Sign Out";
    }, 5000, "waiting for sign out button");
  });

  this.Given(/^I am signed in$/, function () {
    if (browser.getText("#at-nav-button") === "Sign In"){
      browser.waitForExist("#at-nav-button", 1000);
      browser.click('#at-nav-button');
      browser.waitForExist('#at-field-email', 10000);
      browser.setValue("#at-field-email", "tom@email.com");
      browser.setValue("#at-field-password", "password");
      browser.click("#at-btn");
      browser.waitUntil(function () {
        return browser.getText("#at-nav-button") === "Sign Out";
      }, 5000, "waiting for sign out button");
    }
  });

  this.Given(/^I am not logged in$/, function () {
    browser.waitForExist("#at-nav-button", 1000);
    if (browser.getText("#at-nav-button") === "Sign Out") {
      browser.click("#at-nav-button");
    }
  });

  this.When(/^I click on "([^"]*)"$/, function (arg1) {
    browser.click('a='.concat(arg1));
  });

  this.Then(/^I should see my list$/, function () {
    browser.waitForExist(".wishes", 1000);
  });

  this.When(/^I click on the "New Wish" button$/, function () {
    browser.waitForExist("#newWish", 1000);
    browser.waitForVisible("#newWish", 1000);
    browser.click("#newWish");
  });

  this.Then(/^the new wish input form should appear$/, function () {
    browser.waitForExist("#insertWishForm", 1000);
    browser.waitForVisible("#insertWishForm", 1000);
  });

  this.When(/^I input test wish data into the form$/, function () {
    browser.setValue("#insertWishForm .form-group:nth-child(1) .form-control", "Test Item");
    browser.setValue("#insertWishForm .form-group:nth-child(2) .form-control", "This is a test item");
    browser.click("button=Submit");
  });

  this.Then(/^a the test wish should appear$/, function () {
    browser.waitForExist("h3=Test Item", 1000);
    browser.waitForVisible("h3=Test Item", 1000);
  });

  this.When(/^I click the trash icon$/, function () {
    browser.click(".wishes .well:nth-child(4) .fa-trash");
  });

  this.Then(/^the test wish should disappear$/, function () {
    browser.waitForExist("h3=Test Item", 1000, true);
  });

  this.When(/^I click the x$/, function () {
    browser.waitForExist(".fa-close", 1000);
    browser.waitForVisible(".fa-close", 1000);
    browser.click(".fa-close");
  });

  this.Then(/^the wish form should disappear$/, function () {
    browser.waitForExist("#insertWishForm", 1000, true);
    browser.waitForVisible("#insertWishForm", 1000, true);
  });

  this.Then(/^I should see the users list$/, function () {
    browser.waitForExist(".users", 1000);
    browser.waitForVisible(".users", 1000);
    browser.waitForExist("a=Felicity", 1000);
    browser.waitForExist("a=Olivia", 1000);
    browser.waitForExist("a=Groot", 1000);
  });

  this.Then(/^I should see Felicity's wishlist$/, function () {
    browser.waitForExist("h1=Felicity", 1000);
    browser.waitForExist("h3=Industrial Grade Tablet", 1000);
    browser.waitForExist("h3=PS4 Overwatch", 1000);
  });

  this.When(/^I click the first claim button$/, function () {
    browser.waitForExist("#claim-btn", 1000);
    browser.click("#claim-btn");
  });

  this.Then(/^the first wish should be claimed$/, function () {
    browser.waitForExist("#unclaim-btn", 1000);
  });
}
