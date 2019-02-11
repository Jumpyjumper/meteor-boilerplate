
import SimpleSchema from 'simpl-schema';

const FooSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'The _id',
    required: false
  },
  foo: {
    type: String,
    label: 'The foo',
    required: true
  }
});

export {
  FooSchema
}