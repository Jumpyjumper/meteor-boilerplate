import React from 'react';

export default class Caption extends React.Component {

	constructor(props) {
		super(props);
	}
   
	render() {
        return (
            <caption>
                {this.props.children}
            </caption>
        )
	}
}