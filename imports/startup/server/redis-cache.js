import { Meteor } from 'meteor/meteor';
import { RedisOplog } from 'meteor/cultofcoders:redis-oplog';

RedisOplog.init(Meteor.settings["redis-cache"]);




