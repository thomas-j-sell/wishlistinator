var methods = require('../support/methods.js');

module.exports = function () {

  this.Given(/^I navigate to the homepage$/, function () {
    browser.url("localhost:3000");
  });

  this.Then(/^The app dispays the homepage$/, function () {
    browser.waitForExist(".jumbotron");
    expect(browser.getTitle()).toEqual("Wishlistinator");
    expect(browser.getText('h1')).toEqual("Share your wishlists");
  });

  this.When(/^I click on the sign\-in button$/, function () {
    browser.waitForExist("#at-nav-button");
    browser.click('#at-nav-button');
  });

  this.When(/^I enter my credentials$/, function () {
    browser.waitForExist("#at-field-email");
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
      methods.signin;
    }
  });

  this.When(/^I click on "([^"]*)"$/, function (arg1) {
    browser.click('a='.concat(arg1));
  });

  this.Then(/^I should see my list$/, function () {
    browser.waitForExist(".wishes");
  });
}
