
import Foo from './collection';
import { Factory } from 'meteor/dburles:factory';

Factory.define('foo', Foo, {
  foo: () => 'Factory foo'
});