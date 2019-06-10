import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import {MainLayout} from '/imports/ui/layouts/mainlayout.jsx';
import Homepage from '/imports/ui/pages/homepage.jsx';
import React from 'react';



function redirectIfAnonymous(context, redirect) {
    const notSignedIn = Meteor.userId() === null
    if (notSignedIn) {
        Session.set("loginRedirect", true);
        Session.set("requestedPage", context.path);
        redirect('login');
    }
}

const privateRoutes = FlowRouter.group({
    name: 'private',
    triggersEnter: [redirectIfAnonymous]
})

privateRoutes.route('/', {
    name: 'homepage',
    title: 'Homepage',
    action() {
        mount(MainLayout, {
            content: () => <Homepage />
        })
    }
})