import SimpleSchema from 'simpl-schema';

const FooSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'The _id',
    required: false
  },
  bar: {
    type: String,
    label: 'The bar',
    required: true
  }
});

export {
  FooSchema
}