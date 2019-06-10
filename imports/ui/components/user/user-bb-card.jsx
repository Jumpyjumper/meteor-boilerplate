import React from 'react';
import PropTypes from 'prop-types';

class UserBbCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let {user} = this.props;
        return (
            (user) ?
                <aside className="user-bb-card">
                    <div className="container-fluid">
                        <div className="row no-gutters">
                            <div className="col-4 align-self-center">
                                <img
                                    className="user-bb-card-picture"
                                    src={user.picture}/>
                            </div>
                            <div className="col-8 col-xs-pull-1 align-self-center">
                                <span className="user-bb-card-name">{user.firstname}</span> <span className="user-bb-card-name">{user.lastname}</span>
                            </div>
                        </div>
                    </div>
                </aside>
                : 	null
        )
    }
}

UserBbCard.propTypes = {
    user: PropTypes.object
};

UserBbCard.defaultProps = {
};

export {
    UserBbCard
};
