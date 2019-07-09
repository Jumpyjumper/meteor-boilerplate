---
to: imports/api/<%= name %>/resolvers/queries.js
---
<%
 Name = h.capitalize(name)
%>
import { <%=Name%>, <%=Name%>Cache } from '/imports/api/<%=name%>/collection.js';

export const Query = {
    <%=name%>(obj, args) {
        const name = <%=Name%>.getTableName();
        const cacheKey = `${name}:id:${args.id}`;

        return <%=Name%>Cache.findOneCached(cacheKey, {where: {id: args.id}}).then(function([data]){
            if(data && data.dataValues){
                return data.dataValues;
            }
            return null;
        });
		
    }
};