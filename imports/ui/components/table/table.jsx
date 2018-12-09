import React from 'react';

class Table extends React.Component {

	constructor(props) {
        super(props);
        
        this.state = {
            dark: (this.props.dark) ? this.props.dark : false,
            striped: (this.props.striped) ? this.props.striped : false,
            bordered: (this.props.bordered) ? this.props.bordered : false,
            hover: (this.props.hover) ? this.props.hover : false,
            small: (this.props.small) ? this.props.small : false
        }
    }

    getClassName(){
        let className = ["table"];

        if(this.props.dark){
            className.push("table-dark");
        }

        if(this.props.striped){
            className.push("table-striped");
        }

        if(this.props.bordered){
            className.push("table-bordered");
        }

        if(this.props.hover){
            className.push("table-hover");
        }

        if(this.props.small){
            className.push("table-sm");
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
   
	render() {
        const { children } = this.props;
        const bgdark = this.props.dark;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { bgdark: bgdark })
        );

        return <table className={this.getClassName()}>{childrenWithProps}</table>
	}
}

class Thead extends React.Component {

	constructor(props) {
        super(props);
        
        this.state = {
            dark: (this.props.dark) ? this.props.dark : false,
            light: (this.props.striped) ? this.props.striped : false
        }
    }

    getClassName(){
        let className = [];

        if(this.props.dark){
            className.push("thead-dark");
        }

        if(this.props.light){
            className.push("thead-light");
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
   
	render() {
        const { children } = this.props;
        const bgdark = (this.props.bgdark || this.props.dark);

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { thead: true, bgdark: bgdark })
        );

        return <thead className={this.getClassName()}>{childrenWithProps}</thead>
    }
}

class Tbody extends React.Component {

	constructor(props) {
		super(props);
	}
    
    getClassName(){
        let className = [];

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
   
	render() {
        const { children } = this.props;
        const bgdark = (this.props.bgdark || this.props.dark);

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { tbody: true, bgdark: bgdark })
        );

        return <tbody>{childrenWithProps}</tbody>
    }
}

class Tr extends React.Component {

	constructor(props) {
        super(props);
    }
    
    getClassName(){
        let className = [];

        if(this.props.type){
            let bgtype = (this.props.bgdark) ? "bg-" + this.props.type : "table-" + this.props.type;
            className.push(bgtype);
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
   
	render() {
        const { children } = this.props;
        const thead = this.props.thead;
        const tbody = this.props.tbody;
        const bgdark = this.props.bgdark;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { thead: thead, tbody: tbody, bgdark: bgdark })
        );

        return <tr className={this.getClassName()}>{childrenWithProps}</tr>
    }
}

class Th extends React.Component {

	constructor(props) {
		super(props);
    }
    
    getClassName(){
        let className = [];

        if(this.props.type){
            let bgtype = (this.props.bgdark) ? "bg-" + this.props.type : "table-" + this.props.type;
            className.push(bgtype);
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
    
    getScope(){
        let scope = null;

        if(this.props.thead){
            scope = "col";
        }

        if(this.props.tbody){
            scope = "row"
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return scope;
    }
   
	render() {
        return (
            <th className={this.getClassName()} scope={this.getScope()}>
                {this.props.children}
            </th>
        )
	}
}

class Td extends React.Component {

	constructor(props) {
		super(props);
	}
    
    getClassName(){
        let className = [];

        if(this.props.type){
            let bgtype = (this.props.bgdark) ? "bg-" + this.props.type : "table-" + this.props.type;
            className.push(bgtype);
        }

        if(this.props.className){
            className.push(this.props.className);
        }

        return className.join(" ");
    }
   
	render() {
        return (
            <td className={this.getClassName()}>
                {this.props.children}
            </td>
        )
	}
}

export {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
}