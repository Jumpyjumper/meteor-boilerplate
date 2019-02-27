import SimpleSchema from 'simpl-schema';

export const validateId = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id
    }
}).validator();

// TODO move out to a higher level schema once other objects start using `deleted` field also
export const deletedSchema = new SimpleSchema({
    deleted: {type: Boolean, optional: true, defaultValue: false}
});

// TODO replace when version 0.0.5 of 'fuww:created-at-updated-at' is released
// It currently depends on the old simple-schema and it causes unexpected errors
export const createdAtSchema = new SimpleSchema({
    createdAt: {
        type: "datetime-local",
        autoValue() {
            if (this.isInsert) {
                return Date.now();
            } else if (this.isUpsert) {
                return {$setOnInsert: Date.now()};
            }

            // otherwise unset it
            this.unset();
        }
    }
});

function getCreatedAt() {
    return this.siblingField('createdAt').value;
}

export const updatedAtSchema = new SimpleSchema({
    updatedAt: {
        type: "datetime-local",
        autoValue() {
            if (this.isInsert) {
                return getCreatedAt.call(this) || Date.now();
            } else if (this.isUpdate) {
                return {
                    $set: Date.now(),
                    $setOnInsert: getCreatedAt.call(this) || Date.now()
                };
            }

            return Date.now();
        }
    }
});

export const createdBySchema = new SimpleSchema({
    createdBy: {
        type: String,
        autoValue() {
            const {userId} = this;

            if (userId && this.isUpsert) {
                return {$setOnInsert: userId};
            }

            if (userId && this.isInsert) {
                return userId;
            }

            this.unset();
        },
        optional: true
    }
});

export const updatedBySchema = new SimpleSchema({
    updatedBy: {
        type: String,
        autoValue() {
            const {userId} = this;
            
            if (userId && this.isUpdate) {
                return {$set: userId};
            }

            this.unset();
        },
        optional: true
    }
});

export const deleted = {type: Boolean, optional: true, defaultValue: false};