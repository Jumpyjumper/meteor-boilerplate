---
to: imports/api/<%= name %>/collection.js
---
<%
 Name = h.capitalize(name)
%>
import { mysqlDB } from '/imports/api/mysql-connectors.js';
import Sequelize from 'sequelize';

<%=Name%>Model = mysqlDB.define('<%=name%>', {
	id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    <%=name%>: {
		type: Sequelize.STRING
    }
}, {
    timestamps: false
});

mysqlDB.sync();

export const <%=Name%> = mysqlDB.models.<%=name%>;