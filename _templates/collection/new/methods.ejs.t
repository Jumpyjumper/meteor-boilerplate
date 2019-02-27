---
to: imports/api/<%= name %>/methods.js
---
<%
 Name = h.capitalize(name)
%>
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { validateId } from '/imports/api/schema.js';
import <%=Name%> from './collection';
import { <%=Name%>FieldsSchema } from './schema';

export const upsert<%=Name%> = new ValidatedMethod({
  name: '<%=name%>.upsert',
  validate: new SimpleSchema(<%=Name%>FieldsSchema).validator(),
  run(<%=name%>) {
    return <%=Name%>.upsert({ _id: <%=name%>._id }, { $set: <%=name%> });
  },
});

export const insert<%=Name%> = new ValidatedMethod({
  name: '<%=name%>.insert',
  validate: new SimpleSchema(<%=Name%>FieldsSchema).validator(),
  run(<%=name%>) {
    return <%=Name%>.insert(<%=name%>);
  },
});

export const update<%=Name%> = new ValidatedMethod({
  name: '<%=name%>.update',
  validate: new SimpleSchema(<%=Name%>FieldsSchema).validator(),
  run(<%=name%>) {
    return <%=Name%>.update({_id: <%=name%>._id}, { $set: <%=name%> });
  },
});

export const delete<%=Name%> = new ValidatedMethod({
  name: '<%=name%>.delete',
  validate: validateId,
  run({_id}) {
    return <%=Name%>.update({_id}, {$set: {deleted: true}});
  },
});