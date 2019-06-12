---
to: imports/ui/components/<%=name%>/index.jsx
---
<%
 Name = h.capitalize(name)
%>
import React from 'react';
import PropTypes from 'prop-types';

class <%=Name%> extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}

<%=Name%>.defaultProps = {
};

<%=Name%>.propTypes = {
};
  
export default <%=Name%>;
