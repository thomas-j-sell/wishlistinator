var hooks = function () {
  this.Before(function(scenario, callback) {
    // ensure user is logged out
    browser.url("localhost:3000");
    browser.waitForExist("#at-nav-button");
    browser.waitForVisible("#at-nav-button");
    if (browser.getText("#at-nav-button") === "Sign Out") {
      browser.click("#at-nav-button");
    }
    callback();
  });
};

module.exports = hooks;
