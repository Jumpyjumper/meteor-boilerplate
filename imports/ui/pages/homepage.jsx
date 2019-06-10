import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section>
                <div className="container-fluid">
                    <div className="col-12"></div>
                </div>
            </section>
        );
    }
}

Homepage.defaultProps = {
};

Homepage.propTypes = {
};

export default withTracker(() => {
    return {
    };
})(Homepage);