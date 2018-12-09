import React from 'react';
import Breadcrumbs from '/imports/ui/components/breadcrumbs/breadcrumbs.jsx';

const MainLayout = ({content}) => (
    <div>
      <header>
        This is our header
      </header>
      <Breadcrumbs breadcrumbs={Breadcrumb.getAll()}/>
      <main>
        {content()}
      </main>
    </div>
);

export {
	MainLayout
}
