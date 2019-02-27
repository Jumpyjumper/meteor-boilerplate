
Meteor.publish("users", function (filters = {}, options = {}) {
    return Meteor.users.find(filters, options);
});