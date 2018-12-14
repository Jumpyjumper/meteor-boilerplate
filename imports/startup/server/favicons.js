import favicons from "favicons";
import path from "path";
import fs from "fs";

const rootPath = path.resolve('.').split(path.sep + '.meteor')[0];
const configuration = Meteor.settings.private.favicons;

const source = path.resolve(rootPath, './public/images/logo.png');

if (!fs.existsSync(path.resolve(rootPath, './public/favicons'))){
    fs.mkdirSync(path.resolve(rootPath, './public/favicons'));
}

favicons(source, configuration, function (error, response){
    if (error) {
        console.log(error.message);
        return;
    }

    for(var i=0; i < response.files.length; i++){
        fs.writeFile(path.resolve(rootPath, './public/favicons/' + response.files[i].name), response.files[i].contents, function(err){
            if(err) {
                return console.log(err);
            }
        });
    }

    for(var i=0; i < response.images.length; i++){
        fs.writeFile(path.resolve(rootPath, './public/favicons/' + response.images[i].name), response.images[i].contents, function(err){
            if(err) {
                return console.log(err);
            }
        });
    }
        
    fs.writeFile(path.resolve(rootPath, './private/favicons.json'), JSON.stringify(response.html), function(err){
        if (err) throw err;
        console.log('Favicons generated');
    });
});
