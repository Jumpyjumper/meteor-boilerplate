import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Foo from './foo.collection';
import { FooSchema } from './foo.schema';

export const upsertFoo = new ValidatedMethod({
  name: 'foo.upsert',
  validate: new SimpleSchema(FooSchema).validator(),
  run(foo) {
    return Foo.upsert({ _id: foo._id }, { $set: foo });
  },
});

