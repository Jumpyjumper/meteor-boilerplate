---
to: imports/api/<%= name %>/schema.js
---
<%
 Name = h.capitalize(name)
%>
import SimpleSchema from 'simpl-schema';
import {createdAtSchema, createdBySchema, deletedSchema, updatedAtSchema, updatedBySchema} from '/imports/api/schema';

const <%=Name%>FieldsSchema  = new SimpleSchema({
  _id: {
    type: String,
    label: 'The _id',
    required: false
  },
  <%=name%>: {
    type: String,
    label: 'The <%=name%>',
    required: true
  }
}, {
  clean: {
    removeEmptyStrings: false,
    filter: false
  }
});

const <%=Name%>Schema = new SimpleSchema({});
<%=Name%>Schema.extend(<%=Name%>FieldsSchema);
<%=Name%>Schema.extend(deletedSchema);
<%=Name%>Schema.extend(createdAtSchema);
<%=Name%>Schema.extend(updatedAtSchema);
<%=Name%>Schema.extend(createdBySchema);
<%=Name%>Schema.extend(updatedBySchema);

export {
  <%=Name%>FieldsSchema,
  <%=Name%>Schema
}