import { Query } from './resolvers/queries.js';
import { Mutation } from './resolvers/mutations.js';
import { Subscription } from './resolvers/subscriptions.js';

const resolvers = {
    Query: Query,
    Mutation: Mutation,
    Subscription: Subscription
};

export default resolvers;