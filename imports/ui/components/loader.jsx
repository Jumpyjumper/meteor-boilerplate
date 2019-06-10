import React from 'react';

class Loader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <p>Loading...</p>
    }
}

Loader.propTypes = {

};

Loader.defaultProps = {
};

export {
    Loader
};
