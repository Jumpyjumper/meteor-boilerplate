import {FlowRouter} from 'meteor/kadira:flow-router';

Accounts.onLogin(function(){
    if (Meteor.isClient) {
        const route = FlowRouter.current().route.name,
            didLoginOrSignup = route === "login" || route === "signup",
            wasRedirected = Session.get("loginRedirect"),
            requestedPage = Session.get("requestedPage");

        if(wasRedirected && didLoginOrSignup){
            FlowRouter.go(requestedPage)
            Session.set("loginRedirect", false)
        }

        if(Meteor.userId() && didLoginOrSignup){
            FlowRouter.go('homepage')
        }
    }
});