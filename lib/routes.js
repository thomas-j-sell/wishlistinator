// Accounts.onLogin(function() {
//   FlowRouter.go('wishes');
// });

Accounts.onLogout(function() {
  FlowRouter.go('home');
});

// FlowRouter.triggers.enter([function(context, redirect) {
//   if(!Meteor.userId()) {
//     FlowRouter.go('home');
//   }
// }]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('mainLayout', {
      nav: 'navigation',
      content: 'splash',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/wishes', {
  name: 'wishes',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render('mainLayout', {
      nav: 'navigation',
      content: 'wishes',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/users', {
  name: 'users',
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action() {
    BlazeLayout.render('mainLayout', {
      nav: 'navigation',
      content: 'users',
      footer: 'footer'
    });
  }
});

FlowRouter.route('/user/:userId', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params) {
    BlazeLayout.render('mainLayout', {
      nav: 'navigation',
      content: 'user',
      params: params,
      footer: 'footer'
    });
  }
});

//Routes
AccountsTemplates.configureRoute('changePwd');
// AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
