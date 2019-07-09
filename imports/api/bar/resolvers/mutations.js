
import { pubsub } from '/imports/api/graphql-subscriptions.js';
import { redisClient } from '/imports/api/redis-cache';
import { Bar } from '/imports/api/bar/collection.js';

const name = Bar.getTableName();

export const Mutation = {
    insertBar(obj, args) {
        Bar.create(args).then(function(data){
            if(data && data.dataValues){
                const cacheKey = `${name}:id:${data.dataValues.id}`;
                redisClient.set(cacheKey, JSON.stringify(data.dataValues));
            }
        });

        return args;
    },
    updateBar(obj, args) {
        Bar.update({
            bar: args.bar
        }, {
            where: {
                id: args.id
            }
        });

        pubsub.publish("barUpdated", {
            barUpdated: args
        });

        return args;
    }
};