
import { chai } from 'meteor/practicalmeteor:chai';
import Foo from './collection';

describe('Foo collection', function () {
  it('registers the collection with Mongo properly', function () {
    chai.assert.equal(typeof Foo, 'object');
  });
});