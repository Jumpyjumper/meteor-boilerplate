import React from 'react';
import PropTypes from 'prop-types';

class Badge extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const className = ['badge'];

        if (this.props.type) {
            className.push(`badge-${this.props.type}`);
        }

        return className.join(' ');
    }

    render() {
        return (
            <span
                className={this.getClassName()}
                role="status"
                aria-live="polite"
                aria-atomic="true"
            >
                {this.props.children}
            </span>
        );
    }
}

Badge.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node
};

export default Badge;
