import classnames from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef, useState } from 'react';
import { VisuallyHidden } from 'react-aria';
import { IoMenu } from 'react-icons/io5';

import Tagline from '../images/code-good-code-well.inline.svg';
import Logo from '../images/principled-engineer-logo.inline.svg';
import Drawer from './drawer';
import Flourish from './flourish';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const NavTitle = () => (
  <span
    className={classnames(
      'flex',
      'w-[220px]',
      '-ml-3.5',
      'leading-tight',
      'align-middle'
    )}
  >
    <StaticImage
      as="span"
      className="opacity-70"
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
    <header
      className={classnames(
        'relative',
        'bg-global-header',
        'p-4',
        'w-[540px]',
        'mx-auto'
      )}
    >
      <h1 className="inline-block">
        <Link to="/">
          <Logo className="w-[235px] h-auto" alt="" aria-hidden />
          <VisuallyHidden elementType="span">
            The Principled Engineer
          </VisuallyHidden>
        </Link>
      </h1>

      <Tagline className="relative bottom-4 left-[78px]" alt="" aria-hidden />
      <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>

      <button
        type="button"
        className={classnames(
          'icon-button',
          'shadow-md',
          'bg-brando-700',
          'absolute',
          'top-1/2',
          'right-6',
          '-mt-[28px]',
          'text-[36px]'
        )}
        ref={buttonRef}
        onClick={() => setIsMenuOpen(true)}
      >
        <IoMenu className="stroke-brando-200 mx-auto" />
        <VisuallyHidden>Show Navigation</VisuallyHidden>
      </button>
      <Drawer
        title={<NavTitle />}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <nav className="flex flex-wrap align-middle justify-center py-6">
          <Flourish variant="bloom" size="xs" className="opacity-30 mb-4" />
          <PrimaryNav
            className="[&>li]:w-full"
            onClick={() => setIsMenuOpen(false)}
          />
          <Flourish
            variant="bloom"
            size="xs"
            className="opacity-30 mt-4"
            flipped
          />

          <SocialMenu className="pt-3" />
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
