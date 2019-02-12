
import SimpleSchema from 'simpl-schema';
import {createdAtSchema, createdBySchema, deletedSchema, updatedAtSchema, updatedBySchema} from '/imports/api/schema';

const FooFieldsSchema  = new SimpleSchema({
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
}, {
    clean: {
        removeEmptyStrings: false,
        filter: false
    }
});

const FooSchema = new SimpleSchema({});
FooSchema.extend(FooFieldsSchema);
FooSchema.extend(deletedSchema);
FooSchema.extend(createdAtSchema);
FooSchema.extend(updatedAtSchema);
FooSchema.extend(createdBySchema);
FooSchema.extend(updatedBySchema);

export {
    FooFieldsSchema,
    FooSchema
}