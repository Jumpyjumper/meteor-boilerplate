import React from 'react';
import PropTypes from 'prop-types';

class Tbody extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const className = [];

        if (this.props.className) {
            className.push(this.props.className);
        }

        return className.join(' ');
    }

    render() {
        const {children} = this.props;
        const bgdark = (this.props.bgdark || this.props.dark);

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {tbody: true, bgdark}));

        return <tbody>{childrenWithProps}</tbody>;
    }
}

Tbody.defaultProps = {
    bgdark: false,
    dark: false,
    className: ""
};

Tbody.propTypes = {
    bgdark: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Tbody
};
