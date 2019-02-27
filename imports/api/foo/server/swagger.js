
import { ApiV1 } from '/imports/api/swagger'
import { insertFoo, updateFoo, deleteFoo } from '../methods';

ApiV1.addRoute(
    'foo/:id',
    {
        hidden: false
    },
    {
        patch: {
            swagger: {
                tags: ["Foo"],
                description: "Select foo",
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'Foo ID',
                        required: true,
                        type: 'string'
                    },
                    {
                        name: "foo",
                        in: "path",
                        description: "Foo foo",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    "200": {
                        description: "Success"
                    }
                }
            },
            action: function(){
                try {
                    const {body: foo} = this.request;
                    const {id} = this.urlParams;
                    foo._id = id;

                    updateFoo.call(foo);

                    return {data: {status: 'success'}};
                }
                catch(e){
                    return e;
                }
            }
        }
    },
    {
        delete: {
            swagger: {
                tags: ["Foo"],
                description: "Select foo",
                parameters: [
                    {
                        name: 'id',
                        in: 'path',
                        description: 'Foo ID',
                        required: true,
                        type: 'string'
                    }
                ],
                responses: {
                    "200": {
                        description: "Success"
                    }
                }
            },
            action: function(){
                try {
                    const {id} = this.urlParams;

                    deleteFoo.call(id);

                    return {data: {status: 'success'}};
                }
                catch(e){
                    return e;
                }
            }
        }
    }
);


ApiV1.addRoute(
    'foo',
    {
        hidden: false
    },
    {
        post: {
            swagger: {
                tags: ["Foo"],
                description: "Select foo",
                parameters: [
                    {
                        name: "foo",
                        in: "path",
                        description: "Foo foo",
                        required: true,
                        type: "string"
                    }
                ],
                responses: {
                    "200": {
                        description: "Success"
                    }
                }
            },
            action: function(){
                try {
                    const {body: foo} = this.request;

                    insertFoo.call(foo);

                    return {data: {status: 'success'}};
                }
                catch(e){
                    return e;
                }
            }
        }
    }
);

