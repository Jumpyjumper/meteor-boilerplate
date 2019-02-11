
import { Mongo } from 'meteor/mongo';
import { FooSchema } from './schema';
import SimpleSchema from 'simpl-schema';


const Foo = new Mongo.Collection('foo');

Foo.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Foo.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Foo.attachSchema(FooSchema);


export default Foo;


