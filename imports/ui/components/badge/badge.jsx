import React from 'react';

export default class Badge extends React.Component {

	constructor(props) {
		super(props);
    }
    
    getClassName(){
        let className = ["badge"];

        if(this.props.type){
            className.push("badge-" + this.props.type);
        }

        return className.join(" ");
    }
   
	render() {
        return (
            <span
                className={this.getClassName()}
                role="status"
                aria-live="polite"
                aria-atomic="true">
                {this.props.children}
            </span>
        )
	}
}