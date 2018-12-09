import React from 'react';

export default class Breadcrumbs extends React.Component {

	constructor(props) {
		super(props);
    }
   
	render() {
        return (
            <nav aria-label="breadcrumb">
            	<ol className="breadcrumb">
            		{
            			_.map(this.props.breadcrumbs, function(breadcrumb, index){ 				
            				return (
            					<li key={"breadcrumb-" + index} className={breadcrumb.active ? "breadcrumb-item active" : "breadcrumb-item"} aria-current={breadcrumb.active ? "page" : null}>
									{
										(breadcrumb.active) ?
											breadcrumb.routeName
										: 	<a href={breadcrumb.url}>{breadcrumb.routeName}</a>
									}
            					</li>
            				)
            			})
            		}
            	</ol>
            </nav>
      	)
	}
}