import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Foo from './foo.collection';
import { upsertFoo } from './foo.methods';


Factory.define('foo', Foo, {
  bar: () => 'Factory bar'
});

describe('Foo methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a foo into the Foo collection', function () {
    upsertFoo.call({
      bar: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const getFoo = Foo.findOne({ bar: 'You can\'t arrest me, I\'m the Cake Boss!' });
    chai.assert.equal(getFoo.bar, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a foo in the Foo collection', function () {
    const { _id } = Factory.create('foo');

    upsertFoo.call({
      _id,
      bar: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const getFoo = Foo.findOne(_id);
    chai.assert.equal(getFoo.bar, 'You can\'t arrest me, I\'m the Cake Boss!');
  });
});
