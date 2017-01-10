// Accounts.onLogin(function() {
//   FlowRouter.go('wishes');
// });

Accounts.onLogout(function() {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('splash');
  }
});

FlowRouter.route('/wishes', {
  name: 'wishes',
  action() {
    BlazeLayout.render('mainLayout', {content: 'wishes'});
  }
});

FlowRouter.route('/users', {
  name: 'users',
  action(){
    BlazeLayout.render('mainLayout', {content: 'users'});
  }
});

FlowRouter.route('/user/:userId', {
  action: function(params) {
    BlazeLayout.render('mainLayout', {content: 'user', params: params});
  }
});
