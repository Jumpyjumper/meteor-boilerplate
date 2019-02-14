var favicons = require('favicons');
var path = require('path');
var fs = require('fs');

var rootPath = path.resolve('.').split(path.sep + '.meteor')[0];
var contents = fs.readFileSync(path.resolve(rootPath, 'settings-development.json'));
// Define to JSON type
 var jsonContent = JSON.parse(contents);
var configuration = Meteor.settings.private.favicons;
var source = path.resolve(rootPath, './public/images/logo.png');

if(configuration.generate){
    if (!fs.existsSync(path.resolve(rootPath, './public/favicons'))){
        fs.mkdirSync(path.resolve(rootPath, './public/favicons'));
    }

    favicons(source, configuration, function (error, response){
        var file;
        var image;

        if (error) {
            console.error(error.message);
            return;
        }

        for(file in response.files){
            fs.writeFile(path.resolve(rootPath, './public/favicons/' + file.name), file.contents, function(err){
                if(err) {
                    console.error(err);
                }
                return;
            });
        }

        for(image in response.images){
            fs.writeFile(path.resolve(rootPath, './public/favicons/' + image.name),image.contents, function(err){
                if(err) {
                    console.error(err);
                }
                return;
            });
        }
            
        fs.writeFile(path.resolve(rootPath, './private/favicons.json'), JSON.stringify(response.html), function(err){
            if(err) {
                console.error(err);
                return;
            }
            console.info("Favicons generated.");
            return;
        });
    });

}