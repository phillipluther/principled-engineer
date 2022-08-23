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
    <header
      className={classnames('relative bg-global-header p-4 md:p-6', className)}
    >
      <h1 className="inline-block">
        <Link to="/">
          <Logo className="w-[235px] lg:w-full h-auto" alt="" aria-hidden />
          <VisuallyHidden elementType="span">
            The Principled Engineer
          </VisuallyHidden>
        </Link>
      </h1>

      <Tagline
        className="relative bottom-4 left-[78px] lg:static lg:my-2 lg:w-full"
        alt=""
        aria-hidden
      />
      <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>

      {isLarge ? (
        <>
          <hr className="border-brando-500 w-full mt-8" />
          <nav className="flex flex-wrap align-middle justify-center py-6">
            <PrimaryNav
              className="w-full [&>li]:w-full text-brando-200"
              onClick={() => setIsMenuOpen(false)}
            />

            <hr className="border-brando-500 w-full mt-6 mb-4" />
            <SocialMenu className="pt-3 w-full justify-center text-brando-300" />
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
              'absolute',
              'top-1/2',
              'right-6',
              'md:right-8',
              '-mt-[28px]',
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
    </header>
  );
};

export default Header;
