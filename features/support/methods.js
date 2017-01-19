(function () {
  module.exports = {
    signin: function () {
      browser.waitForExist("#at-nav-button");
      browser.click('#at-nav-button');
      browser.waitForExist('#at-field-email');
      browser.setValue("#at-field-email", "tom@email.com");
      browser.setValue("#at-field-password", "password");
      browser.click("#at-btn");
      browser.waitUntil(function () {
        return browser.getText("#at-nav-button") === "Sign Out";
      }, 5000, "waiting for sign out button");
    }
  };
});
