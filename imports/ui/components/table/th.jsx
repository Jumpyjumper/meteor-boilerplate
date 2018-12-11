import React from 'react';
import PropTypes from 'prop-types';
import {TableComponent} from './table-component.jsx';

class Th extends TableComponent {
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

    getScope() {
        let scope = null;
        let className = [];

        if (this.props.thead) {
            scope = 'col';
        }

        if (this.props.tbody) {
            scope = 'row';
        }

        if (this.props.className) {
            className.push(this.props.className);
        }

        return scope;
    }

    render() {
        return (
            <th className={this.getClassName()} scope={this.getScope()}>
                {this.props.children}
            </th>
        );
    }
}

Th.defaultProps = {
    type: "",
    thead: true,
    tbody: false,
    bgdark: false,
    className: ""
};

Th.propTypes = {
    type: PropTypes.string,
    thead: PropTypes.bool,
    tbody: PropTypes.bool,
    bgdark: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Th
};
