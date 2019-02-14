import { Logger } from 'meteor/ostrio:logger';
import { LoggerConsole } from 'meteor/ostrio:loggerconsole';

const log = new Logger();

(() => new LoggerConsole(log).enable())();

if(navigator && navigator.serviceWorker){
    navigator.serviceWorker
        .register('/service-worker.js')
        .then()
        .catch(error => log.error(error));
}