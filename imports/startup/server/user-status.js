// Listen for new connections, login, logoff and application exit to manage user status and register methods to be used by client to set user status and default status
UserPresence.start();

if(Meteor.isDevelopment){
    // Active logs for every changes
    UserPresence.activeLogs();
}

// Listen for changes in UserSessions and Meteor.users to set user status based on active connections
UserPresenceMonitor.start();