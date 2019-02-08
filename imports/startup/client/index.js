import { Logger } from 'meteor/ostrio:logger';
import { LoggerConsole } from 'meteor/ostrio:loggerconsole';

const log = new Logger();

(() => new LoggerConsole(log).enable())();

navigator.serviceWorker
    .register('/service-worker.js')
    .then()
    .catch(error => log.error(error));



import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '/imports/ui/layouts/MainLayout.jsx';
import Homepage from '/imports/ui/pages/homepage.jsx';
import Styleguide from '/imports/ui/pages/styleguide.jsx';

const authenticate = (nextState, replace) => {
	/*
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
  */
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Homepage } onEnter={ authenticate } />
        <Route name="styleguide" path="/styleguide" component={ Styleguide } onEnter={ authenticate } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
