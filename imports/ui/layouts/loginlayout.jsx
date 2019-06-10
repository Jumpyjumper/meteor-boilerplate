import React from 'react';
import PropTypes from 'prop-types';
import MDWebsite from '/imports/ui/components/microdata/website.jsx';

const LoginLayout = ({content}) => (
    <div className="login-layout">
        <MDWebsite/>
        <main>
            {content()}
        </main>
    </div>
);

LoginLayout.propTypes = {
    content: PropTypes.func
};

export {
    LoginLayout
};