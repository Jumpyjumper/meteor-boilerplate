import React from 'react';
import PropTypes from 'prop-types';
import {H1} from '../headings/headings.jsx';

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

MDWebsite.propTypes = {
};
  
export default MDWebsite; 

        