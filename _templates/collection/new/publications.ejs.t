---
to: imports/api/<%= name %>/server/publications.js
---
<%
 Name = h.capitalize(name)
%>
import <%=Name%> from '../collection';

Meteor.publish("<%=name%>", function (filters = {}, options = {}) {
    return <%=Name%>.find(filters, options);    
});