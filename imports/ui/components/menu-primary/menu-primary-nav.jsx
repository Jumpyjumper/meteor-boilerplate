import React from 'react';
import PropTypes from 'prop-types';

class MenuPrimaryNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <nav className="menu-primary-nav">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav flex-column">
                                {
                                    _.map(this.props.rooms, function(room){
                                        return (
                                            <li className="nav-item menu-primary-nav-item">
                                                <a className="nav-link menu-primary-nav-link" href={"/room/" + room._id}>#{room.name}</a>
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

MenuPrimaryNav.propTypes = {
    rooms: PropTypes.array
};

MenuPrimaryNav.defaultProps = {
    rooms: []
};

export {
    MenuPrimaryNav
}
