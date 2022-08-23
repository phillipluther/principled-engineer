import * as React from 'react';

import Footer from './footer';
import Header from './header';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="lg:pl-[240px]" data-is-root-path={isRootPath}>
      <Header className="lg:fixed lg:fixed-left lg:h-screen lg:w-[240px]" />

      <main className="p-4 md:p-6">
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
