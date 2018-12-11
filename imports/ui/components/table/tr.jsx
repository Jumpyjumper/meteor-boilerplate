import React from 'react';
import PropTypes from 'prop-types';

class Tr extends React.Component {
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
        const {children} = this.props;
        const thead = this.props.thead;
        const tbody = this.props.tbody;
        const bgdark = this.props.bgdark;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {thead, tbody, bgdark}));

        return <tr className={this.getClassName()}>{childrenWithProps}</tr>;
    }
}

Tr.defaultProps = {
    type: "",
    thead: false,
    tbody: false,
    bgdark: false,
    className: ""
};


Tr.propTypes = {
    type: PropTypes.string,
    thead: PropTypes.bool,
    tbody: PropTypes.bool,
    bgdark: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Tr
};
