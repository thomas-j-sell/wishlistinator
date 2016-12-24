Accounts.onLogin(function() {
  FlowRouter.go('wishes');
});

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
    // if(Meteor.userId()) {
    //   FlowRouter.go('wishes');
    // }
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
