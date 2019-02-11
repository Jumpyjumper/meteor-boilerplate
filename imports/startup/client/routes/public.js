import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {mount} from 'react-mounter';
import {MainLayout} from '/imports/ui/layouts/MainLayout.jsx';
import Homepage from '/imports/ui/pages/homepage.jsx';
import Styleguide from '/imports/ui/pages/styleguide.jsx';
import React from 'react';

FlowRouter.route('/', {
    name: 'homepage',
    title: 'Homepage',
    action() {
        mount(MainLayout, {
            content: () => <Homepage />,
        });
    },
});

FlowRouter.route('/styleguide', {
    name: 'styleguide',
    title: 'Styleguide',
    action() {
        mount(MainLayout, {
            content: () => <Styleguide />,
        });
    },
});