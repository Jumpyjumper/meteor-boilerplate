
import { Mongo } from 'meteor/mongo';
import { FooSchema } from './schema';

const Foo = new Mongo.Collection('foo');

Foo.allow({
    insert: () => Meteor.isTest,
    update: () => Meteor.isTest,
    remove: () => Meteor.isTest,
});

Foo.deny({
    insert: () => !Meteor.isTest,
    update: () => !Meteor.isTest,
    remove: () => !Meteor.isTest,
});

Foo.attachSchema(FooSchema);

export default Foo;