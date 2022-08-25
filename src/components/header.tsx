import classnames from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useRef, useState } from 'react';
import { VisuallyHidden } from 'react-aria';
import { IoMenu } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';

import customTailwindConfig from '../../tailwind.config';
import Tagline from '../images/code-good-code-well.inline.svg';
import Logo from '../images/principled-engineer-logo.inline.svg';
import Drawer from './drawer';
import Flourish from './flourish';
import PrimaryNav from './primary-nav';
import { SkipNavLink } from './skip-nav';
import SocialMenu from './social-menu';

const NavTitle = () => (
  <span
    className={classnames(
      'flex',
      'w-[220px]',
      '-ml-2',
      'leading-tight',
      'items-center'
    )}
  >
    <StaticImage
      as="span"
      className="opacity-70"
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

const Header = ({ className }: { className?: string }) => {
  const buttonRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tailwindConfig = resolveConfig(customTailwindConfig as any);
  const isLarge = useMediaQuery({
    // @ts-ignore
    query: `(min-width: ${tailwindConfig.theme.screens.lg})`,
  });

  return (
    <header className={classnames('relative bg-global-header', className)}>
      {isLarge && <SkipNavLink label="Skip to Content" />}

      <div className="max-w-screen-xl mx-auto flex justify-between items-center padded">
        <h1 className="inline-block">
          <Link to="/">
            <Logo className="w-[200px] h-auto" alt="" aria-hidden />
            <VisuallyHidden elementType="span">
              The Principled Engineer
            </VisuallyHidden>
          </Link>
          <Tagline
            className="relative bottom-4 -mb-4 left-[78px]"
            alt=""
            aria-hidden
          />
          <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>
        </h1>

        {isLarge ? (
          <>
            <nav className="flex align-middle justify-end w-full">
              <PrimaryNav
                className="text-brando-200 lg:flex-nowrap mr-12 lg:text-xl"
                onClick={() => setIsMenuOpen(false)}
              />
              <SocialMenu className="justify-center text-brando-200" />
            </nav>
          </>
        ) : (
          <>
            <button
              type="button"
              className={[
                'icon-button',
                'shadow-md',
                'bg-brando-700',
                'text-[36px]',
              ].join(' ')}
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
                <Flourish variant="bloom" className="opacity-30 mb-4" />
                <PrimaryNav
                  className="w-full [&>li]:w-full"
                  onClick={() => setIsMenuOpen(false)}
                />
                <Flourish variant="bloom" className="opacity-30 mt-4" flipped />

                <SocialMenu className="pt-3 w-full justify-center" />
              </nav>
            </Drawer>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
