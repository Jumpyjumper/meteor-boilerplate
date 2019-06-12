---
to: imports/ui/layouts/<%=name%>/index.jsx
---
<%
 Name = h.capitalize(name)
%>
import React from 'react';
import PropTypes from 'prop-types';

const <%=Name%>Layout = ({content}) => (
    <div className="main-layout">
        <main>
            {content()}
        </main>
    </div>
);

<%=Name%>Layout.propTypes = {
    content: PropTypes.func
};

export {
    <%=Name%>Layout
};
