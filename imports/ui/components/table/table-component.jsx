import React from 'react';

class TableComponent extends React.Component {
	
    constructor(props) {
        super(props);
    }

    getTypeClassName(type, bgdark){
        return (bgdark) ? `bg-${type}` : `table-${type}`;
    }

}

export {
    TableComponent
};
