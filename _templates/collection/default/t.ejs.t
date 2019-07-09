---
to: imports/api/<%= name %>/collection.test.js
---
<%
 Name = h.capitalize(name)
%>
import { chai } from 'meteor/practicalmeteor:chai';
import <%=Name%> from './collection';

describe('<%=Name%> collection', function () {
  it('registers the collection with Mongo properly', function () {
    chai.assert.equal(typeof <%=Name%>, 'object');
  });
});