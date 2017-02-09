var hooks = function () {
  this.Before(function(scenario, callback) {
    // reset database
    server.call('reset');

    // ensure user is logged out
    browser.url("localhost:3000");
    browser.waitForExist("#at-nav-button", 1000);
    browser.waitForVisible("#at-nav-button", 1000);
    if (browser.getText("#at-nav-button") === "Sign Out") {
      browser.click("#at-nav-button");
    }

    callback();
  });

  this.After(function(scenario, callback) {
    // save a screenshot of failure state to help diagnose problems
    if(scenario.isFailed()) {
      var filename = 'features/failure-' +
        scenario.getName().replace(" ", "-").toLowerCase()
        + '.png';
      browser.saveScreenshot(filename);
    }
    callback();
  });
};

module.exports = hooks;
