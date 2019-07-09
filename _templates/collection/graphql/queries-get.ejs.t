---
to: imports/api/<%= name %>/queries/get-<%=name%>.graphql
---
query <%=name%>($id: ID!) {
  <%=name%>(id: $id) {
    id
    <%=name%>
  }
}