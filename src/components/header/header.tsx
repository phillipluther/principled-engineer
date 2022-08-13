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
import Logo from '../../images/principled-engineer-logo.inline.svg';
import Tagline from '../../images/code-good-code-well.inline.svg';

import * as styles from './header.module.css';
import {
  flipped,
  padded,
  contained,
  iconButton,
} from '../../style-utils.module.css';

const NavTitle = () => (
  <span className={styles.navTitle}>
    <StaticImage
      as="span"
      className={styles.badge}
      layout="fixed"
      formats={['auto', 'webp', 'avif']}
      src="../../images/principled-engineer-icon.png"
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
    <header className={classnames(padded, contained, styles.header)}>
      <SkipNavLink label="Skip to Content" />
      <h1 className={styles.title}>
        <Link to="/">
          <Logo className={styles.logo} alt="" aria-hidden />
          <VisuallyHidden>The Principled Engineer</VisuallyHidden>
        </Link>
      </h1>

      <Tagline className={styles.subhead} alt="" aria-hidden />
      <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>

      <button
        type="button"
        className={classnames(iconButton, styles.menuButton)}
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
          <Flourish variant="bloom" size="xs" className={styles.flourish} />
          <PrimaryNav
            className={styles.nav}
            onClick={() => setIsMenuOpen(false)}
          />
          <Flourish
            variant="bloom"
            size="xs"
            className={classnames(styles.flourish, flipped)}
          />

          <SocialMenu className={styles.social} />
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
