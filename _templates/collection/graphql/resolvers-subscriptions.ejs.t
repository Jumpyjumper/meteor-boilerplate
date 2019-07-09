---
to: imports/api/<%= name %>/resolvers/subscriptions.js
---
<%
 Name = h.capitalize(name)
%>
import { withFilter } from 'graphql-subscriptions'; 
import { pubsub } from '/imports/api/graphql-subscriptions.js';

export const Subscription = {
	<%=name%>Updated: {
		subscribe: withFilter(() => pubsub.asyncIterator('<%=name%>Updated'), (payload, args) => {
			return (payload.<%=name%>Updated.id===args.id);
		})
	},
	<%=name%>sUpdated: {
		subscribe: withFilter(() => pubsub.asyncIterator('<%=name%>sUpdated'), (payload, args) => {
			return (payload.<%=name%>sUpdated.id===args.id);
		})
	}
};