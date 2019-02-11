---
to: imports/api/<%= name %>/server/publications.test.js
---
<%
 Name = h.capitalize(name)
%>
import { chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { collect } from '/imports/api/test';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import <%=Name%> from '../collection';
import './publications';


describe('<%=Name%> publications', () => {
  beforeEach(() => {
    <%=Name%>.remove({});
  });

    it('collects <%=name%>', function() {
      const collector = new PublicationCollector({ userId: Random.id()});

    return new Promise(function(resolve) {
      collector.collect('<%=name%>', function (collections) {
        resolve(collections);
      });
    }).then(function(col) {
      chai.assert.notEqual(col, null);
    });
  });    
});