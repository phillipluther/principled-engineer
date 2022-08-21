import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Content from './content';

const Bio = () => (
  <Content
    as="aside"
    className="p-4 mt-12 border-t-2 border-brando-300 bg-gradient-to-br from-brando-200 to-brando-100"
  >
    <h2 className="mt-0">About the Author</h2>
    <div className="ml-6 mb-4 mt-0 float-right">
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

    <p className="text-sm text-brando-600">
      <sup>*</sup> I'm just over 40. Accounting for childhood and teenage
      buffoonery I'll translate "life long" to 20'ish years. Throwing that out
      for clarity.
    </p>
  </Content>
);

export default Bio;
