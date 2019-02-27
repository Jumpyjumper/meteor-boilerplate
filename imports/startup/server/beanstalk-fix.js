import { Meteor } from 'meteor/meteor';
import { RedisOplog } from 'meteor/cultofcoders:redis-oplog';

if (Meteor.isProduction) {
    Meteor.settings = JSON.parse(Buffer.from(process.env.METEOR_SETTINGS_EB, 'base64').toString());
    RedisOplog.init(Meteor.settings.redisOplog);
}




