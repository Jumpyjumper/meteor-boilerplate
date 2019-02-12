import { Logger } from 'meteor/ostrio:logger';
import { LoggerConsole } from 'meteor/ostrio:loggerconsole';

const log = new Logger();

(() => new LoggerConsole(log).enable())();

if(!Meteor.isTest){
    if(!Meteor.isTest){
        navigator.serviceWorker
            .register('/service-worker.js')
            .then()
            .catch(error => log.error(error));
    }else{
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration
                    .unregister()
                    .then()
                    .catch(error => log.error(error));
            }
        });
    }
}