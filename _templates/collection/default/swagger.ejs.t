---
to: imports/api/<%= name %>/server/swagger.js
---
<%
 Name = h.capitalize(name)
%>
import { ApiV1 } from '/imports/api/swagger'
import { upsert<%=Name%>, insert<%=Name%>, update<%=Name%>, delete<%=Name%> } from '../methods';

ApiV1.addRoute(
	'<%=name%>/:id', 
	{
		hidden: false
	}, 
	{
		patch: {
			swagger: {
				tags: ["<%=Name%>"],
				description: "Select <%=name%>",
				parameters: [
					{
						name: 'id',
						in: 'path',
						description: '<%=Name%> ID',
						required: true,
						type: 'string'
					},
					{ 
						name: "<%=name%>",
						in: "path",
						description: "<%=Name%> <%=name%>",
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
					const {body: <%=name%>} = this.request;
					const {id} = this.urlParams;
					<%=name%>._id = id;

					update<%=Name%>.call(<%=name%>);

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
				tags: ["<%=Name%>"],
				description: "Select <%=name%>",
				parameters: [
					{
						name: 'id',
						in: 'path',
						description: '<%=Name%> ID',
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

					delete<%=Name%>.call(id);

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
	'<%=name%>', 
	{
		hidden: false
	}, 
	{
		post: {
			swagger: {
				tags: ["<%=Name%>"],
				description: "Select <%=name%>",
				parameters: [
					{ 
						name: "<%=name%>",
						in: "path",
						description: "<%=Name%> <%=name%>",
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
					const {body: <%=name%>} = this.request;

					insert<%=Name%>.call(<%=name%>);

					return {data: {status: 'success'}};
				}
				catch(e){
					return e;
				}
			}
		}
	}
);