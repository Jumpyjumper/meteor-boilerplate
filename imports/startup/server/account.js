Accounts.onCreateUser(function (options, user) {
    if(user.services.google){
        user.username = user.services.google.email;
        user.firstname = user.services.google.given_name;
        user.lastname = user.services.google.family_name;
        user.picture = user.services.google.picture;

    }
    return user;
});
