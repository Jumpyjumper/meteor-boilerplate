import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import {LoginLayout} from '/imports/ui/layouts/loginlayout.jsx';
import {MainLayout} from '/imports/ui/layouts/mainlayout.jsx';
import Login from '/imports/ui/pages/login.jsx';
import Styleguide from '/imports/ui/pages/styleguide.jsx';
import React from 'react';

const publicRoutes = FlowRouter.group({
    name: 'public',
    triggersEnter: [function(){
        const notSignedIn = Meteor.userId() === null
        if (!notSignedIn) {
            FlowRouter.go('homepage');
        }
    }]
});

publicRoutes.route('/login', {
    name: 'login',
    title: 'Login',
    action() {
        mount(LoginLayout, {
            content: () => <Login />
        })
    }
});

publicRoutes.route('/styleguide', {
    name: 'styleguide',
    title: 'Styleguide',
    action() {
        mount(MainLayout, {
            content: () => <Styleguide />
        })
    }
});