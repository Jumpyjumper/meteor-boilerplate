import BarResolvers from '/imports/api/bar/resolvers';
import BarSchema from '/imports/api/bar/schema.graphql';
import { ApolloServer } from 'apollo-server-express';
import { WebApp } from 'meteor/webapp';
import merge from 'lodash/merge';

const typeDefs = [BarSchema];
const resolvers = merge(BarResolvers);

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    uploads: false,
    subscriptions: {
        path: "/subscriptions"
    }
});

apolloServer.installSubscriptionHandlers(WebApp.httpServer);

apolloServer.applyMiddleware({
    app: WebApp.connectHandlers,
    path: '/graphql'
});

WebApp.connectHandlers.use('/graphql', (req, res) => {
    if (req.method === 'GET') {
        res.end()
    }
});