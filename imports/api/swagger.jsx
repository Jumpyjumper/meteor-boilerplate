let ApiV1;

if(Meteor.isServer){
    //JsonRoutes.Middleware.use('/api', JsonRoutes.Middleware.excludeSwaggerJson);
    //JsonRoutes.Middleware.use('/api', JsonRoutes.Middleware.parseBearerToken);
    //JsonRoutes.Middleware.use('/api', JsonRoutes.Middleware.validateUserToken);

    ApiV1 = new Restivus({
        apiPath: 'api/',
        version: 'v1',
        prettyJson: true,
        enableCors: true
    });

    ApiV1.swagger = {
        meta: {
            swagger: "2.0",
            info: {
                version: "1.0.0",
                title: "Meteor boilerplate",
                description: "Meteor boilerplate",
                contact: {
                    name: "Fabien Maronnaud"
                },
                license: {
                    name: "MIT"
                }
            }
        },
        definitions: {
        }
    }

    ApiV1.addSwagger('swagger.json');

    export {
        ApiV1
    }
}




	