import {FlowRouter} from 'meteor/ostrio:flow-router-extra';
import {FlowRouterMeta, FlowRouterTitle} from 'meteor/ostrio:flow-router-meta';
import './public.jsx';


function isNotLoggedIn(context, redirect) {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        redirect('/login');
    }
}

function isLoggedIn(context, redirect) {
    if (Meteor.user() || Meteor.loggingIn()) {
        redirect('/');
    }
}


FlowRouter.triggers.enter([isNotLoggedIn], {
    except: ['login']
});


FlowRouter.triggers.enter([isLoggedIn], {
    only: ['login']
});

(() => new FlowRouterMeta(FlowRouter))();
(() => new FlowRouterTitle(FlowRouter))();

