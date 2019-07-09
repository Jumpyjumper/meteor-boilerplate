
import { withFilter } from 'graphql-subscriptions';
import { pubsub } from '/imports/api/graphql-subscriptions.js';

export const Subscription = {
    barUpdated: {
        subscribe: withFilter(() => pubsub.asyncIterator('barUpdated'), (payload, args) => {
            return (payload.barUpdated.id===args.id);
        })
    },
    barsUpdated: {
        subscribe: withFilter(() => pubsub.asyncIterator('barsUpdated'), (payload, args) => {
            return (payload.barsUpdated.id===args.id);
        })
    }
};