import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '/imports/ui/components/breadcrumbs/breadcrumbs.jsx';
import MDWebsite from '/imports/ui/components/microdata/website.jsx';

const MainLayout = ({content}) => (
    <div>
        <MDWebsite/>
        <header>
        This is our header
        </header>
        <Breadcrumbs breadcrumbs={Breadcrumb.getAll()} />
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