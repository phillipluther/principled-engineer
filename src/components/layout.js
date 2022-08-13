import * as React from 'react';
import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />

      <main className={classnames()}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
