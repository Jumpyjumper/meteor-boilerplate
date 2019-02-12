
import Foo from '../collection';

Meteor.publish("foo", function (filter) {
    return Foo.find(filter);    
});