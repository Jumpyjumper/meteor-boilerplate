
import { upsertFoo } from '../methods';
ApiV1.addRoute(
		'foo/:id', 
		{
			hidden: false
		}, 
		{
			get: {
				swagger: {
					tags: ["Foo"],
					description: "Select foo",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "Foo ID",
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
					}
					catch(e){
						return e;
					}
				}
			},
			post: {
				swagger: {
					tags: ["Foo"],
					description: "Insert a foo",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "Foo ID",
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
					}
					catch(e){
						return e;
					}
				}
			},
			patch: {
				swagger: {
					tags: ["Foo"],
					description: "Update a foo",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "Foo ID",
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
					}
					catch(e){
						return e;
					}
				}
			},
			delete: {
				swagger: {
					tags: ["Foo"],
					description: "Delete a foo",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "Foo ID",
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
					}
					catch(e){
						return e;
					}
				}
			}   
		}
	);
