---
to: imports/api/<%= name %>/schema.js
---
<%
 Name = h.capitalize(name)
%>
import SimpleSchema from 'simpl-schema';

const <%=Name%>Schema = new SimpleSchema({
  _id: {
    type: String,
    label: 'The _id',
    required: false
  },
  foo: {
    type: String,
    label: 'The foo',
    required: true
  }
});

export {
  <%=Name%>Schema
}