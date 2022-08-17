import classnames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { displayFont, padded } from '../../style-utils.module.css';
import Content from '../content';
import * as styles from './bio.module.css';

const Bio = () => (
  <Content as="aside" className={classnames(padded, styles.wrapper)}>
    <h2 className={classnames(styles.title)}>About the Author</h2>
    <div className={styles.image}>
      <StaticImage
        src="../../images/portrait-avatar.jpg"
        width={112}
        height={112}
        alt="Phillip Luther, author and sole contributor to the Principled Engineer"
      />
    </div>

    <p> My name is Phillip Luther. I go by Phil.</p>

    <p>
      I'm a life-long<sup>*</sup> software engineer and classically trained
      musician. I'm also the creator of and sole contributor to the Principled
      Engineer, this very blog.
    </p>

    <p>
      Blog-relevant areas of current interest include the web audio API,
      non-crypto blockchain technology, and legislative overreactions to dark
      patterns.
    </p>

    <p>
      Blog-irrelevant areas of current interest include sci-fi/fantasy across
      most mediums, micro-optimizing my living space, and constantly fluctuating
      on whether I'm a mountain person or an ocean person.
    </p>

    <p className={styles.finePrint}>
      <sup>*</sup> I'm just over 40. Accounting for childhood and teenage
      buffoonery I'll translate "life long" to 20'ish years. Throwing that out
      for clarity.
    </p>
  </Content>
);

export default Bio;
