---
to: imports/api/<%= name %>/factory.test.js
---
<%
 Name = h.capitalize(name)
%>
import <%=Name%> from './collection';
import { Factory } from 'meteor/dburles:factory';

Factory.define('<%=name%>', <%=Name%>, {
  <%=name%>: () => 'Factory <%=name%>'
});