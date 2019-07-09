---
to: imports/api/<%= name %>/queries/get-<%=name%>.js
---
query <%=name%>($id: ID!) {
  <%=name%>(id: $id) {
    id
    <%=name%>
  }
}