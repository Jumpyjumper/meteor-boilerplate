
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { validateId } from '/imports/api/schema.js';
import Foo from './collection';
import { FooSchema } from './schema';

export const upsertFoo = new ValidatedMethod({
    name: 'foo.upsert',
    validate: new SimpleSchema(FooSchema).validator(),
    run(foo) {
        return Foo.upsert({ _id: foo._id }, { $set: foo });
    },
});

export const deleteFoo = new ValidatedMethod({
    name: 'foo.delete',
    validate: validateId,
    run({_id}) {
        return Foo.update({_id}, {$set: {deleted: true}});
    },
});