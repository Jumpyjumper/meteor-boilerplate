---
to: imports/api/<%= name %>/methods.test.js
---
<%
 Name = h.capitalize(name)
%>
import { Meteor } from 'meteor/meteor';
import <%=Name%> from './collection';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import { upsert<%=Name%>, delete<%=Name%> } from './methods';
import { createStubs, restoreStubs } from '/imports/api/stubs.test.js'

Factory.define('<%=name%>', <%=Name%>, {
  <%=name%>: () => 'Factory <%=name%>'
});

describe('<%=Name%> methods', function () {
  beforeEach(() => {
    if(Meteor.isServer){
      resetDatabase();
    }
    createStubs();
  });
  afterEach(() => {
    if(Meteor.isServer){
      resetDatabase();        
    }
    restoreStubs();
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



