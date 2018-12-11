import React from 'react';
import PropTypes from 'prop-types';
import {TableComponent} from './table-component.jsx';

class Td extends TableComponent {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const className = [];

        if (this.props.type) {
            className.push(this.getTypeClassName(this.props.type, this.props.bgdark));
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
