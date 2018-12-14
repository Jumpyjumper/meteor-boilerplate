import '/imports/startup/server';
import {WebApp} from 'meteor/webapp';


var favicons = JSON.parse(Assets.getText('favicons.json'));
var faviconslist = favicons.join("\n");

WebApp.addHtmlAttributeHook(() => ({lang: 'en'}));

WebApp.rawConnectHandlers.use(
    Meteor.bindEnvironment(function (req, res, next) {
        req.dynamicHead = (req.dynamicHead || "") + faviconslist;
        next();
    })
);
