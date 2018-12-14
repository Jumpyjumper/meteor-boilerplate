import favicons from "favicons";
import path from "path";
import fs from "fs";
import { Logger } from 'meteor/ostrio:logger';
import { LoggerConsole } from 'meteor/ostrio:loggerconsole';

const rootPath = path.resolve('.').split(path.sep + '.meteor')[0];
const configuration = Meteor.settings.private.favicons;
const source = path.resolve(rootPath, './public/images/logo.png');
const log = new Logger();

(() => new LoggerConsole(log).enable())();

if (!fs.existsSync(path.resolve(rootPath, './public/favicons'))){
    fs.mkdirSync(path.resolve(rootPath, './public/favicons'));
}

favicons(source, configuration, function (error, response){
    let file;
    let image;

    if (error) {
        log.error(error.message);
        return;
    }

    for(file in response.files){
        fs.writeFile(path.resolve(rootPath, './public/favicons/' + file.name), file.contents, function(err){
            if(err) {
                log.error(err);
            }
            return;
        });
    }

    for(image in response.images){
        fs.writeFile(path.resolve(rootPath, './public/favicons/' + image.name),image.contents, function(err){
            if(err) {
                log.error(err);
            }
            return;
        });
    }
        
    fs.writeFile(path.resolve(rootPath, './private/favicons.json'), JSON.stringify(response.html), function(err){
        if(err) {
            log.error(err);
            return;
        }
        log.info("Favicons generated.");
        return;
    });
});
