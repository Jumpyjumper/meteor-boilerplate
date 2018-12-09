import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { mount } from 'react-mounter';
import { MainLayout } from '/imports/ui/layouts/MainLayout.jsx';
import Homepage from '/imports/ui/pages/Homepage.jsx';
import React from 'react';

FlowRouter.route('/', {
  name: 'homepage',
  title: 'Homepage',
  action() {
    mount(MainLayout, {
      content: () => <Homepage/>,
    });
  },
});

FlowRouter.route('/test', {
  name: 'test',
  title: 'Test',
  parent: 'homepage',
  action() {
    mount(MainLayout, {
      content: () => <Homepage/>,
    });
  },
});
