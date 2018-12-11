import React from 'react';
import PropTypes from 'prop-types';

class Td extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const className = [];

        if (this.props.type) {
            const bgtype = (this.props.bgdark) ? `bg-${this.props.type}` : `table-${this.props.type}`;
            className.push(bgtype);
        }

        if (this.props.className) {
            className.push(this.props.className);
        }

        return className.join(' ');
    }

    render() {
        return (
            <td className={this.getClassName()}>
                {this.props.children}
            </td>
        );
    }
}

Td.defaultProps = {
    bgdark: false,
    type: "",
    className: ""
};

Td.propTypes = {
    bgdark: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Td
};
