ServiceConfiguration.configurations.remove({
    service: "google"
});

ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: Meteor.settings.private.accounts.google.clientId,
    secret: Meteor.settings.private.accounts.google.secretId
});