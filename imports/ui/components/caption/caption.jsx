import React from 'react';
import PropTypes from 'prop-types';

class Caption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <caption>
                {this.props.children}
            </caption>
        );
    }
}

Caption.propTypes = {
    children: PropTypes.node
};


export default Caption;