import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dark: (this.props.dark) ? this.props.dark : false,
            striped: (this.props.striped) ? this.props.striped : false,
            bordered: (this.props.bordered) ? this.props.bordered : false,
            hover: (this.props.hover) ? this.props.hover : false,
            small: (this.props.small) ? this.props.small : false
        };
    }

    getClassName() {
        const className = ['table'];

        if (this.props.dark) {
            className.push('table-dark');
        }

        if (this.props.striped) {
            className.push('table-striped');
        }

        if (this.props.bordered) {
            className.push('table-bordered');
        }

        if (this.props.hover) {
            className.push('table-hover');
        }

        if (this.props.small) {
            className.push('table-sm');
        }

        if (this.props.className) {
            className.push(this.props.className);
        }

        return className.join(' ');
    }

    render() {
        const {children} = this.props;
        const bgdark = this.props.dark;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {bgdark}));

        return <table className={this.getClassName()}>{childrenWithProps}</table>;
    }
}

Table.defaultProps = {
    dark: false,
    striped: false,
    bordered: false,
    hover: false,
    small: false,
    className: ""
};
  

Table.propTypes = {
    dark: PropTypes.bool,
    striped: PropTypes.bool,
    bordered: PropTypes.bool,
    hover: PropTypes.bool,
    small: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

export {
    Table
};
