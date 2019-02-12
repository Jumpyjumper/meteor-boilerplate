
import { Mongo } from 'meteor/mongo';
import { FooSchema } from './schema';

const Foo = new Mongo.Collection('foo');

Foo.attachSchema(FooSchema);

export default Foo;


