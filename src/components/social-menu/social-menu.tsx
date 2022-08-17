import classnames from 'classnames';
import React from 'react';
import { BsEnvelopeFill, BsRssFill, BsTwitter } from 'react-icons/bs';

import { PrimaryNavItemProps } from '../primary-nav';
import * as styles from './social-menu.module.css';

export type SocialMenuItemProps = PrimaryNavItemProps & {
  icon: React.FC;
};

export type SocialMenuProps = {
  className?: string;
};

export const socialItems: SocialMenuItemProps[] = [
  {
    label: '@principledeng on Twitter',
    href: 'https://twitter.com/principledeng',
    icon: BsTwitter,
  },
  {
    label: 'hello@principled.engineer',
    href: 'mailto:hello@principled.engineer',
    icon: BsEnvelopeFill,
  },
  { label: 'Subscribe with RSS', href: '/rss.xml', icon: BsRssFill },
];

const SocialMenu = ({ className, ...props }: SocialMenuProps) => (
  <ul className={classnames(styles.wrapper, className)} {...props}>
    {socialItems.map(({ label, href, icon: Icon }) => (
      <li className={styles.item} key={href}>
        <a href={href} title={label} className={styles.link}>
          <Icon aria-label={label} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialMenu;
