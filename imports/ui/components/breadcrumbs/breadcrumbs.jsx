import React from 'react';
import PropTypes from 'prop-types';

export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" property="schema:breadcrumb" typeof="schema:BreadcrumbList">
                    {
                        _.map(this.props.breadcrumbs, (breadcrumb, index) => (
                            <li 
                                key={`breadcrumb-${index}`} className={breadcrumb.active ? 'breadcrumb-item active' : 'breadcrumb-item'} 
                                aria-current={breadcrumb.active ? 'page' : null}
                                property="schema:itemListElement"
                                typeof="schema:ListItem">
                                <a href={breadcrumb.url} property="schema:item" typeof="schema:WebPage">
                                    <meta property="schema:url" content={Meteor.absoluteUrl().slice(0, -1) + breadcrumb.url}/>
                                    <span property="schema:name">{breadcrumb.routeName}</span>
                                </a>
                                <meta property="schema:position" content={index}/>
                            </li>
                        ))
                    }
                </ol>
            </nav>
        );
    }
}


Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.array
};
