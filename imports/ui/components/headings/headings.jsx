import React from 'react';
import PropTypes from 'prop-types';

class Heading extends React.Component {
    constructor(props) {
        super(props);
    }

    getClassName() {
        const className = [];

        if (this.props.heading) {
            className.push(`h${this.props.heading}`);
        }

        if (this.props.display) {
            className.push(`display-${this.props.display}`);
        }

        if (this.props.className) {
            className.push(this.props.className);
        }

        return className.join(' ');
    }
}

Heading.propTypes = {
    heading: PropTypes.string,
    display: PropTypes.string,
    className: PropTypes.string

};

class H1 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className={this.getClassName()}>
                {this.props.children}
            </h1>
        );
    }
}

class H2 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h2 className={this.getClassName()}>
                {this.props.children}
            </h2>
        );
    }
}

class H3 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3 className={this.getClassName()}>
                {this.props.children}
            </h3>
        );
    }
}
class H4 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h4 className={this.getClassName()}>
                {this.props.children}
            </h4>
        );
    }
}
class H5 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h5 className={this.getClassName()}>
                {this.props.children}
            </h5>
        );
    }
}
class H6 extends Heading {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h6 className={this.getClassName()}>
                {this.props.children}
            </h6>
        );
    }
}

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
};
