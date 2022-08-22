import * as React from 'react';

import Footer from './footer';
import Header from './header';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />

      <main className="p-4 mx-auto w-[540px]">
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
