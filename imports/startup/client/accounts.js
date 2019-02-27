import {FlowRouter} from 'meteor/ostrio:flow-router-extra';

Accounts.onLogin(function() {
    let redirect = Session.get('redirectAfterLogin');
    if(redirect && redirect !== '/login'){
        FlowRouter.go(redirect);
    }else{
        FlowRouter.go('/')
    }
});

Accounts.onLogout(function() {
    FlowRouter.go('/login');
});