AccountsTemplates.configure({
  defaultLayoutType: 'blaze',
  defaultLayout: 'mainLayout',
  defaultLayoutRegions: {
    nav: 'navigation',
    footer: 'footer'
  },
  defaultContentRegion: 'content',

  forbidClientAccountCreation: true,
  overrideLoginErrors: false,
  // enforceEmailVerification: true
});
