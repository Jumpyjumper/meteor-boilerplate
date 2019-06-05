Meteor.startup(function() {
    // Time of inactivity to set user as away automaticly. Default 60000
    UserPresence.awayTime = 6000;
    // Set user as away when window loses focus. Defaults false
    UserPresence.awayOnWindowBlur = true;
    // Start monitor for user activity
    UserPresence.start();
});