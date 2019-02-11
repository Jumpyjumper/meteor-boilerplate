
import { Meteor } from 'meteor/meteor';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Factory } from 'meteor/dburles:factory';
import Foo from './collection';
import { upsertFoo } from './methods';


Factory.define('foo', Foo, {
  foo: () => 'Factory foo'
});

describe('Foo methods', function () {
  beforeEach(function () {
    if (Meteor.isServer) {
      resetDatabase();
    }
  });

  it('inserts a foo into the Foo collection', function () {
    upsertFoo.call({
      foo: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const getFoo = Foo.findOne({ foo: 'You can\'t arrest me, I\'m the Cake Boss!' });
    chai.assert.equal(getFoo.foo, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('updates a foo in the Foo collection', function () {
    const { _id } = Factory.create('foo');

    upsertFoo.call({
      _id,
      foo: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const getFoo = Foo.findOne(_id);
    chai.assert.equal(getFoo.foo, 'You can\'t arrest me, I\'m the Cake Boss!');
  });
});
