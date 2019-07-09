---
to: imports/api/<%= name %>/resolvers/mutations.js
---
<%
 Name = h.capitalize(name)
%>
import { pubsub } from '/imports/api/graphql-subscriptions.js';
import { redisClient } from '/imports/api/redis-cache';
import { <%=Name%> } from '/imports/api/<%=name%>/collection.js';

const name = <%=Name%>.getTableName();

export const Mutation = {
    insert<%=Name%>(obj, args, context) {
        <%=Name%>.create(args).then(function(data){
            console.log(data);
            if(data && data.dataValues){
                const cacheKey = `${name}:id:${data.dataValues.id}`;
                redisClient.set(cacheKey, JSON.stringify(data.dataValues));
            }
        });

        return args;
    },
    update<%=Name%>(obj, args, context) {
		<%=Name%>.update({
            <%=name%>: args.<%=name%>
        }, {
            where: {
                id: args.id
            }
        });

        pubsub.publish("<%=name%>Updated", {
            <%=name%>Updated: args
        });

        return args;
    }
};