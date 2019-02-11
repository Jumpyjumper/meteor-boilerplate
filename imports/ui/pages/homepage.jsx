import React from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import Foo from '../../api/foo/collection';
import { upsertFoo } from '../../api/foo/methods';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.addFoo = this.addFoo.bind(this);
    }

    addFoo(){
        upsertFoo.call({
            foo: Math.random().toString()
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <button onClick={this.addFoo}>test</button>
                {
                    _.map(this.props.foos, function(foo){
                        return (
                            <p key={foo._id}>{foo.foo}</p>
                        )
                    })
                }
            </div>
        );
    }
}

Homepage.defaultProps = {
    foos: [],
    foosReady: false
};

Homepage.propTypes = {
    foos: PropTypes.string,
    foosReady: PropTypes.arrayOf(PropTypes.object)
};

export default withTracker(() => {
    let foos = Meteor.subscribe("foo", {});
    return {
        foosReady: foos.ready(),
        foos: Foo.find({}).fetch()
    };
})(Homepage);