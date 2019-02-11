---
to: imports/api/<%= name %>/server/swagger.js
---
<%
 Name = h.capitalize(name)
%>
import { upsert<%=Name%> } from '../methods';
ApiV1.addRoute(
		'<%=name%>/:id', 
		{
			hidden: false
		}, 
		{
			get: {
				swagger: {
					tags: ["<%=Name%>"],
					description: "Select <%=name%>",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "<%=Name%> ID",
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
					tags: ["<%=Name%>"],
					description: "Insert a <%=name%>",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "<%=Name%> ID",
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
					tags: ["<%=Name%>"],
					description: "Update a <%=name%>",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "<%=Name%> ID",
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
					tags: ["<%=Name%>"],
					description: "Delete a <%=name%>",
					parameters: [
						{ 
							name: "id",
							in: "path",
							description: "<%=Name%> ID",
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
