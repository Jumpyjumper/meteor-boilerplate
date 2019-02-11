
import { chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { collect } from '/imports/api/test';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import Foo from '../collection';
import './publications';


describe('Foo publications', () => {
  beforeEach(() => {
    Foo.remove({});
  });

    it('collects foo', function() {
      const collector = new PublicationCollector({ userId: Random.id()});

    return new Promise(function(resolve) {
      collector.collect('foo', function (collections) {
        resolve(collections);
      });
    }).then(function(col) {
      chai.assert.notEqual(col, null);
    });
  });    
});