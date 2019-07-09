import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

export const client = new ApolloClient({
    link: ApolloLink.split(
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query);
            return kind === 'OperationDefinition' && operation === 'subscription';
        },
        new WebSocketLink({
            uri: `${Meteor.absoluteUrl("/subscriptions").replace("http", "ws")}`,
            options: {
                reconnect: true
            }
        }),
        ApolloLink.from([
            new HttpLink({
                uri: '/graphql'
            })
        ])
    ),
    cache: new InMemoryCache()
});