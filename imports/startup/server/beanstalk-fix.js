import { Meteor } from 'meteor/meteor';

if (Meteor.isProduction) {
    Meteor.settings = JSON.parse(Buffer.from(process.env.METEOR_SETTINGS_EB, 'base64').toString());
}