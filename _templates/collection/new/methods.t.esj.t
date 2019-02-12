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
import {Random} from 'meteor/random';
import { upsert<%=Name%>, delete<%=Name%> } from './methods';


Factory.define('<%=name%>', <%=Name%>, {
  <%=name%>: () => 'Factory <%=name%>',
  created: () => new Date(),
  createdBy: () => Random.id(),
  createdAt: () => new Date(),
  createdBy: () => Random.id(),
  modifiedAt: () => new Date(),
  modifiedBy: () => Random.id(),
  deleted: () => false
});

describe('<%=Name%> methods', function () {
    beforeEach(function () {
      if (Meteor.isServer) {
        resetDatabase();
      }
    });

  it('inserts a <%=name%> into the <%=Name%> collection', function () {
    upsert<%=Name%>.call({
        <%=name%>: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const get<%=Name%> = <%=Name%>.findOne({ <%=name%>: 'You can\'t arrest me, I\'m the Cake Boss!' });
    chai.assert.equal(get<%=Name%>.<%=name%>, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a <%=name%> in the <%=Name%> collection', function () {
    const { _id } = Factory.create('<%=name%>');

    upsert<%=Name%>.call({
      _id,
      <%=name%>: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const get<%=Name%> = <%=Name%>.findOne(_id);
    chai.assert.equal(get<%=Name%>.<%=name%>, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('deletes a <%=name%> in the <%=Name%> collection', function () {
    const {_id} = Factory.create('<%=name%>');
    delete<%=Name%>.call({_id});

    const deleted<%=Name%> = <%=Name%>.findOne(_id);
    chai.assert.equal(deleted<%=Name%>.deleted, true);
  });
});

