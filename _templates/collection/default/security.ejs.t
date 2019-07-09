---
to: imports/api/<%= name %>/security.js
---
<%
 Name = h.capitalize(name)
%>
import <%=Name%> from './collection';

<%=Name%>.allow({
	insert: () => Meteor.isTest,
	update: () => Meteor.isTest,
	remove: () => Meteor.isTest,
});

<%=Name%>.deny({
	insert: () => !Meteor.isTest,
	update: () => !Meteor.isTest,
	remove: () => !Meteor.isTest,
});


