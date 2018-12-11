import React from 'react';
import PropTypes from 'prop-types';

class Thead extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dark: (this.props.dark) ? this.props.dark : false,
            light: (this.props.striped) ? this.props.striped : false
        };
    }

    getClassName() {
        const className = [];

        if (this.props.dark) {
            className.push('thead-dark');
        }

        if (this.props.light) {
            className.push('thead-light');
        }

        if (this.props.className) {
            className.push(this.props.className);
        }

        return className.join(' ');
    }

    render() {
        const {children} = this.props;
        const bgdark = (this.props.bgdark || this.props.dark);

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {thead: true, bgdark}));

        return <thead className={this.getClassName()}>{childrenWithProps}</thead>;
    }
}

Thead.defaultProps = {
    striped: false,
    dark: false,
    light: false,
    bgdark: false,
    className: ""
};

Thead.propTypes = {
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    bgdark: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Thead
};
