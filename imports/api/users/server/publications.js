
Meteor.publish("users", function (filter) {
    return Meteor.users.find(filter);
});