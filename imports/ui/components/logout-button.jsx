import React from 'react';
import PropTypes from 'prop-types';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="btn btn-sm btn-primary" href="/logout">Logout</a>
        );
    }
}

LogoutButton.propTypes = {
    title: PropTypes.string
};
  
export default LogoutButton;
