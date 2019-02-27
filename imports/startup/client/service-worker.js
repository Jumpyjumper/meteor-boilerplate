if(navigator && navigator.serviceWorker && !Meteor.isCordova){
    navigator.serviceWorker
        .register('/service-worker.js')
        .then()
        .catch(function(error){
            throw new Error(error);
        });
}
