import React from 'react';
import PropTypes from 'prop-types';

class MDWebsite extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hidden" aria-hidden={true}>
                <meta property="schema:accessibilityAPI" content={this.props.accessibilityAPI}/>
                <meta property="schema:url" content={this.props.url}/>
                <meta property="schema:description" content={this.props.description}/>
                <meta property="schema:inLanguage" content={this.props.inLanguage}/>
            </div>
        );
    }
}

MDWebsite.defaultProps = {
    accessibilityAPI: null,
    url: null,
    description: null,
    inLanguage: null
};

MDWebsite.propTypes = {
    accessibilityAPI: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    inLanguage: PropTypes.string
};

export default MDWebsite;

        