---
to: imports/ui/pages/<%=name%>/index.jsx
---
<%
 Name = h.capitalize(name)
%>
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class <%=Name%> extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="col-12"></div>
                </div>
            </section>
        );
    }
}

<%=Name%>.defaultProps = {
};

<%=Name%>.propTypes = {
};

export default withTracker(() => {
    return {
    };
})(<%=Name%>);