
import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { validateId } from '/imports/api/schema.js';
import Foo from './collection';
import { FooFieldsSchema } from './schema';

export const upsertFoo = new ValidatedMethod({
    name: 'foo.upsert',
    validate: new SimpleSchema(FooFieldsSchema).validator(),
    run(foo) {
        return Foo.upsert({ _id: foo._id }, { $set: foo });
    },
});

export const insertFoo = new ValidatedMethod({
    name: 'foo.insert',
    validate: new SimpleSchema(FooFieldsSchema).validator(),
    run(foo) {
        return Foo.insert(foo);
    },
});

export const updateFoo = new ValidatedMethod({
    name: 'foo.update',
    validate: new SimpleSchema(FooFieldsSchema).validator(),
    run(foo) {
        return Foo.update({_id: foo._id}, { $set: foo });
    },
});

export const deleteFoo = new ValidatedMethod({
    name: 'foo.delete',
    validate: validateId,
    run({_id}) {
        return Foo.update({_id}, {$set: {deleted: true}});
    },
});