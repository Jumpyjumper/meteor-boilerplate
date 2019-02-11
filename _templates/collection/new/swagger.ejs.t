---
to: imports/api/<%= name %>/server/swagger.js
---
<%
 Name = h.capitalize(name)
%>
import { ApiV1 } from '/imports/api/swagger'
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
						upsert<%=Name%>
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
				}
			}   
		}
	);
