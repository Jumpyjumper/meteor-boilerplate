
import Foo from './collection';

Foo.allow({
    insert: () => Meteor.isTest,
    update: () => Meteor.isTest,
    remove: () => Meteor.isTest,
});

Foo.deny({
    insert: () => !Meteor.isTest,
    update: () => !Meteor.isTest,
    remove: () => !Meteor.isTest,
});


