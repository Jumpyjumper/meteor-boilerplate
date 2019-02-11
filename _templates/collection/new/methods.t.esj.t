---
to: imports/api/<%= name %>/methods.test.js
---
<%
 Name = h.capitalize(name)
%>
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import <%=Name%> from './collection';
import { upsert<%=Name%> } from './methods';


Factory.define('<%=name%>', <%=Name%>, {
  foo: () => 'Factory foo'
});

describe('<%=Name%> methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a <%=name%> into the <%=Name%> collection', function () {
    upsert<%=Name%>.call({
      foo: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const get<%=Name%> = <%=Name%>.findOne({ foo: 'You can\'t arrest me, I\'m the Cake Boss!' });
    chai.assert.equal(get<%=Name%>.foo, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a <%=name%> in the <%=Name%> collection', function () {
    const { _id } = Factory.create('<%=name%>');

    upsert<%=Name%>.call({
      _id,
      foo: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const get<%=Name%> = <%=Name%>.findOne(_id);
    chai.assert.equal(get<%=Name%>.foo, 'You can\'t arrest me, I\'m the Cake Boss!');
  });
});
