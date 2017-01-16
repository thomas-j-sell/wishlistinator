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
    browser.waitForExist(".login-link-text");
    browser.click('.login-link-text');
    // browser.saveScreenshot("./screenshot.png");
  });

  this.When(/^I enter my credentials$/, function () {
    browser.waitForExist("#login-username-or-email");
    browser.setValue("#login-username-or-email", "Tom");
    browser.setValue("#login-password", "password");
    browser.click(".login-button");
  });

  this.Then(/^I should be signed in$/, function () {
    browser.waitForExist("#login-name-link");
    expect(browser.getText("#login-name-link")).toEqual("Tom ▾")
  });

  this.Given(/^I am signed in$/, function () {
    methods.signin;
  });

  this.When(/^I click on "([^"]*)"$/, function (arg1) {
    browser.click('a='.concat(arg1));
  });

  this.Then(/^I should see my list$/, function () {
    browser.waitForExist(".wishes");
  });
}
