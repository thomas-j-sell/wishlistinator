(function () {
  module.exports = {
    signin: function () {
      browser.waitForExist("#login-sign-in-link");
      browser.click('#login-sign-in-link');
      browser.waitForExist('#login-username-or-email');
      browser.setValue("#login-username-or-email", "Tom");
      browser.setValue("#login-password", "password");
      browser.click(".login-button");
      browser.waitForExist("#login-name-link");
    }
  };
});
