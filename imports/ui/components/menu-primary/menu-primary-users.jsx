import React from 'react';
import PropTypes from 'prop-types';

class MenuPrimaryUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){


        return (
            <nav className="menu-primary-users">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav flex-column">
                                {
                                    _.map(this.props.users, function(user){
                                        let statusClass = (user.status === 'online') ? "border-success" : "border-danger";
                                        return (
                                            <li className="nav-item menu-primary-nav-item">
                                                <div className="row no-gutters">
                                                    <div className="col-2 align-self-center">
                                                        <img
                                                            className={"menu-primary-users-picture " + statusClass}
                                                            src={user.picture}/>
                                                    </div>
                                                    <div className="col-10 align-self-center">
                                                        <span className="menu-primary-users-link">{user.firstname} {user.lastname}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

MenuPrimaryUsers.propTypes = {
    users: PropTypes.array
};

MenuPrimaryUsers.defaultProps = {
    users: []
};

export {
    MenuPrimaryUsers
}
