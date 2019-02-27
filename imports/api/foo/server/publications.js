
import Foo from '../collection';

Meteor.publish("foo", function (filters = {}, options = {}) {
    return Foo.find(filters, options);
});