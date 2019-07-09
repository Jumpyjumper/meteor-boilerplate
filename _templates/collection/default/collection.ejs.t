---
to: imports/api/<%= name %>/collection.js
---
<%
 Name = h.capitalize(name)
%>
import { Mongo } from 'meteor/mongo';
import { <%=Name%>Schema } from './schema';

const <%=Name%> = new Mongo.Collection('<%=name%>');

<%=Name%>.attachSchema(<%=Name%>Schema);

export default <%=Name%>;


