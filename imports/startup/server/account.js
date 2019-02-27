ServiceConfiguration.configurations.remove({
    service: "google"
});

ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: Meteor.settings.private.accounts.google.clientId,
    secret: Meteor.settings.private.accounts.google.secretId
});

Accounts.onCreateUser(function (options, user) {
    if(user.services.google){
        user.username = user.services.google.name

    }
    return user;
});


