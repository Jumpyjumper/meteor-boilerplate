---
to: imports/api/<%= name %>/collection.js
---
<%
 Name = h.capitalize(name)
%>
import { Mongo } from 'meteor/mongo';
import { <%=Name%>Schema } from './schema';
import SimpleSchema from 'simpl-schema';


const <%=Name%> = new Mongo.Collection('<%=name%>');

<%=Name%>.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

<%=Name%>.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

<%=Name%>.attachSchema(<%=Name%>Schema);


export default <%=Name%>;


