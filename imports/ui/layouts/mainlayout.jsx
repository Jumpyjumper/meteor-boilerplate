import React from 'react';
import PropTypes from 'prop-types';
import HeaderPrimary from '/imports/ui/components/header-primary/header-primary.jsx';
import MenuPrimary from '/imports/ui/components/menu-primary/menu-primary.jsx';
import MDWebsite from '/imports/ui/components/microdata/website.jsx';

const MainLayout = ({content}) => (
    <div className="main-layout">
        <MDWebsite/>
        <HeaderPrimary/>
        {
            (!Meteor.isCordova) ?
                <MenuPrimary/>
                :   null

        }
        <main>
            {content()}
        </main>
    </div>
);

MainLayout.propTypes = {
    content: PropTypes.func
};

export {
    MainLayout
};