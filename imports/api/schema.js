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
        type: Date,
        autoValue() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
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
        type: Date,
        autoValue() {
            if (this.isInsert) {
                return getCreatedAt.call(this) || new Date();
            } else if (this.isUpdate) {
                return {
                    $set: new Date(),
                    $setOnInsert: getCreatedAt.call(this) || new Date()
                };
            }

            return new Date();
        }
    }
});

export const createdBySchema = new SimpleSchema({
    createdBy: {
        type: String,
        autoValue() {
            const {userId} = this;

            if (userId) {
                if (this.isUpsert) {                	
                    return {$setOnInsert: userId};
                }

                if (this.isInsert) {
                    return userId;
                }
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

            if (userId) {
                if (this.isUpdate) {
	                return {$set: userId};
	            }
            }

            this.unset();
        },
        optional: true
    }
});

export const deleted = {type: Boolean, optional: true, defaultValue: false};