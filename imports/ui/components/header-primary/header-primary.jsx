import React from 'react';
import PropTypes from 'prop-types';
import LogoutButton from '/imports/ui/components/logout-button.jsx';

class HeaderPrimary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header-primary">
                <LogoutButton/>
            </header>
        );
    }
}

HeaderPrimary.propTypes = {
    title: PropTypes.string
};
  
export default HeaderPrimary;
