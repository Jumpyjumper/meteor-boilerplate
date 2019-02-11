import React from 'react';
import PropTypes from 'prop-types';
import {H1} from '../headings/headings.jsx';

class HeaderPrimary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <H1 property={"schema:headline"}>{this.props.title}</H1>
            </header>
        );
    }
}

HeaderPrimary.propTypes = {
    title: PropTypes.string
};
  
export default HeaderPrimary;
