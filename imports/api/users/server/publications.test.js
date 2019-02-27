
import { chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import './publications';


describe('Users publications', () => {
  beforeEach(() => {
    Meteor.users.remove({});
  });

    it('collects users', function() {
      const collector = new PublicationCollector({ userId: Random.id()});

    return new Promise(function(resolve) {
      collector.collect('users', function (collections) {
        resolve(collections);
      });
    }).then(function(col) {
      chai.assert.notEqual(col, null);
    });
  });    
});