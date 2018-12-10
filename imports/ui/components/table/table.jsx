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

class Th extends React.Component {
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
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
};
