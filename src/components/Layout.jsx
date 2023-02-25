import React from 'react';
import SiteNav from './SiteNav';
import { Outlet, useParams } from 'react-router-dom';

function Layout() {
  const {title} = useParams();
  return (
    <>
      <header className="page-header">
        <SiteNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
