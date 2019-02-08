import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Foo from '../../api/foo/foo.collection';
import { upsertFoo } from '../../api/foo/foo.methods';

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.addFoo = this.addFoo.bind(this);
    }

    addFoo(){
        upsertFoo.call({
            bar: Math.random().toString()
        }, (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("good")
          }
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <button onClick={this.addFoo}>test</button>
                {
                    _.map(this.props.foos, function(foo){
                        return (
                            <p key={foo._id}>{foo.bar}</p>
                        )
                    })
                }
            </div>
        );
    }
}

export default withTracker((params) => {
    let foos = Meteor.subscribe("foo", {});
    return {
        foosReady: foos.ready(),
        foos: Foo.find({}).fetch()
    };
})(Homepage);