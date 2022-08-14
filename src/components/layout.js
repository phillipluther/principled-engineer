import * as React from 'react';
import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';

import { padded, contained } from '../style-utils.module.css';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header />

      <main className={classnames(padded, contained)}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
