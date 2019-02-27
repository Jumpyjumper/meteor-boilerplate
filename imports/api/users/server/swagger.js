
//import { ApiV1 } from '/imports/api/swagger'

/*
ApiV1.addRoute(
	'users/:id',
	{
		hidden: false
	},
	{
		patch: {
			swagger: {
				tags: ["Users"],
				description: "Select users",
				parameters: [
					{
					  name: 'id',
					  in: 'path',
					  description: 'Users ID',
					  required: true,
					  type: 'string'
					},
					{
						name: "users",
						in: "path",
						description: "Users users",
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
					const {body: users} = this.request;
					const {id} = this.urlParams;
					users._id = id;

					updateUsers.call(users);

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
				tags: ["Users"],
				description: "Select users",
				parameters: [
					{
					  name: 'id',
					  in: 'path',
					  description: 'Users ID',
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

					deleteUsers.call(id);

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
	'users',
	{
		hidden: false
	},
	{
		post: {
			swagger: {
				tags: ["Users"],
				description: "Select users",
				parameters: [
					{
						name: "users",
						in: "path",
						description: "Users users",
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
					const {body: users} = this.request;

					insertUsers.call(users);

          			return {data: {status: 'success'}};
				}
				catch(e){
					return e;
				}
			}
		}
	}
);

*/