---
to: imports/api/<%= name %>/schema.graphql
---
<%
 Name = h.capitalize(name)
%>
type <%=Name%> {
  id: ID
  <%=name%>: String
}

type Query {
  <%=name%>(id: ID!): <%=Name%>
  <%=name%>s(id: [ID]): [<%=Name%>]
}

type Mutation {
  update<%=Name%>(id: ID!, <%=name%>: String!): <%=Name%>
  insert<%=Name%>(<%=name%>: String!): <%=Name%>
}

type Subscription {
	<%=name%>Updated(id: ID!): <%=Name%>
  <%=name%>sUpdated(id: [ID]): [<%=Name%>]
}

schema {
	query: Query
	mutation: Mutation
	subscription: Subscription
}