import Foo from '../foo.collection';

Meteor.publish("foo", function (filter) {
    return Foo.find({});    
});