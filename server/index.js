import '/imports/startup/server';
import {WebApp} from 'meteor/webapp';


const favicons = JSON.parse(Assets.getText('favicons.json'));
const faviconslist = favicons.join("\n");
const viewport = '<meta name="viewport" content="width=device-width">';
const nojs = '<noscript><style>body { font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; font-size: 32px; text-align: center; line-height: 100vh; } body:after { content: "Please enable JavaScript in your browser to view this site."; }</style></noscript>';

WebApp.addHtmlAttributeHook(() => ({
	'lang': 'en',
	'xmlns:og': 'http://ogp.me/ns#',
	'xml:lang': 'en',
	'prefix': 'schema: http://schema.org/'
}));

WebApp.rawConnectHandlers.use(
    Meteor.bindEnvironment(function (req, res, next) {
        req.dynamicHead = (req.dynamicHead || "") + faviconslist + viewport + nojs;
        next();
    })
);
