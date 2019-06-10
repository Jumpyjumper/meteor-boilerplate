import React from 'react';
import PropTypes from 'prop-types';
import {MenuPrimaryUsers} from '/imports/ui/components/menu-primary/menu-primary-users.jsx';
import {UserBbCard} from '/imports/ui/components/user/user-bb-card.jsx';
import { withTracker } from 'meteor/react-meteor-data';

class MenuPrimary extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <section className="menu-primary">
                <UserBbCard user={Meteor.user()}/>
                <MenuPrimaryUsers users={this.props.users}/>
            </section>
        )
    }
}

MenuPrimary.propTypes = {
    users: PropTypes.array
};

MenuPrimary.defaultProps = {
    users: []
};

export default withTracker(() => {
    let users = Meteor.subscribe("users", {});
    return {
        usersReady: users.ready(),
        users: Meteor.users.find({}).fetch()
    };
})(MenuPrimary);
