import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import classnames from 'classnames';
import { VisuallyHidden } from 'react-aria';
import Drawer from '../drawer';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import { SkipNavLink } from '../skip-nav';
import Flourish from '../flourish';

import styles from './header.module.css';

const NavTitle = () => (
  <span className={styles.navTitle}>
    <StaticImage
      className={styles.badge}
      layout="fixed"
      formats={['auto', 'webp', 'avif']}
      src="../images/principled-engineer-icon.png"
      width={48}
      height={48}
      quality={70}
      aria-hidden
      alt=""
    />
    <span>The Principled Engineer</span>
  </span>
);

const Header = () => {
  const buttonRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={classnames(styles.header)}>
      <SkipNavLink label="Skip to Content" />
      <h1 className={styles.logo}>
        <Link href="/">
          <a>
            <StaticImage
              src="../images/principled-engineer-logo.svg"
              width={470}
              height={240}
              alt=""
              aria-hidden
            />
            <VisuallyHidden>The Principled Engineer</VisuallyHidden>
          </a>
        </Link>
      </h1>

      <StaticImage
        className={styles.subhead}
        src="/images/code-good-code-well.svg"
        width={156}
        height={28}
        alt=""
        aria-hidden
      />
      <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>

      <button
        type="button"
        className={classnames(styles.menuButton)}
        ref={buttonRef}
        onClick={() => setIsMenuOpen(true)}
      >
        <span className={styles.hamburger} role="presentation" />
        <VisuallyHidden>Show Navigation</VisuallyHidden>
      </button>
      <Drawer
        title={<NavTitle />}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <nav className={styles.navWrapper}>
          <Flourish variant="bloom" size="sm" className={styles.flourish} />
          <PrimaryNav
            className={styles.nav}
            onClick={() => setIsMenuOpen(false)}
          />
          <Flourish
            variant="bloom"
            size="sm"
            className={classnames(styles.flourish)}
          />

          <SocialMenu className={styles.social} />
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
