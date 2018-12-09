import React from 'react';

export default class Alert extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};

		if(this.props.dismiss){
			this.state.dismiss = false;
			this.handleDismiss = this.handleDismiss.bind(this);
		}
	}
	
	handleDismiss(e){
		e.preventDefault();
		this.setState({
			dismiss: true
		});
	}
   
	render() {
        if((this.props.dismiss && !this.state.dismiss) || !this.props.dismiss) {
            return (
                <div className={"alert alert-" + this.props.type} role="alert">
                    {this.props.children}
                    {
                        (this.props.dismiss) ?
                            <button type="button" className="close" aria-label="Close" onClick={this.handleDismiss}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        :   null
                    }
                </div>
            )
        }
        return null
	}
}