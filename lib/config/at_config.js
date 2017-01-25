AccountsTemplates.configure({
  defaultLayoutType: 'blaze',
  defaultLayout: 'mainLayout',
  defaultLayoutRegions: {
    nav: 'navigation',
    footer: 'footer'
  },
  defaultContentRegion: 'content',

  forbidClientAccountCreation: true,
  confirmPassword: true,
  enablePasswordChange: true,
  overrideLoginErrors: false,
  // enforceEmailVerification: true
});
