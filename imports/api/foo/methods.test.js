
import { Meteor } from 'meteor/meteor';
import Foo from './collection';
import { chai } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { upsertFoo, deleteFoo, updateFoo } from './methods';
import { createStubs, restoreStubs } from '/imports/api/stubs.test.js'

describe('Foo methods', function () {
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

  it('updates a foo in the Foo collection', function () {
    const { _id } = Factory.create('foo');

    updateFoo.call({
      _id,
      foo: 'You can\'t arrest me, I\'m the Cake Boss!'
    });

    const getFoo = Foo.findOne(_id);
    chai.assert.equal(getFoo.foo, 'You can\'t arrest me, I\'m the Cake Boss!');
  });

  it('deletes a foo in the Foo collection', function () {
    const {_id} = Factory.create('foo');
    deleteFoo.call({_id});

    const deletedFoo = Foo.findOne(_id);
    chai.assert.equal(deletedFoo.deleted, true);
  });
});



