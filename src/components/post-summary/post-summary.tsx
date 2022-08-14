import React from 'react';
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
  getImage,
} from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';

import * as styles from './post-summary.module.css';
import { padded, textified, displayFont } from '../../style-utils.module.css';

export type PostProps = {
  id: string;
  markdown: string;
  title: string;
  author: string;
  slug: string;
  summary?: string;
  published: string;
  tags?: string[];
  keywords?: string[];
  series?: string;
  cover?: IGatsbyImageData;
  cover_credit?: string;
  cover_credit_link?: string;
  cover_alt?: string;
};

export type PostSummaryProps = PostProps & {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const PostSummary = ({
  title,
  summary,
  published,
  slug,
  cover,
  headingLevel: Heading = 'h2',
  className,
}: PostSummaryProps) => {
  const coverImage = cover ? getImage(cover) : null;

  return (
    <article
      className={classnames(padded, textified, styles.wrapper, className)}
    >
      <header>
        {coverImage ? (
          <GatsbyImage
            image={coverImage}
            alt=""
            aria-hidden
            className={styles.image}
          />
        ) : (
          <StaticImage
            src="../../images/social-card.jpg"
            width={720}
            height={405}
            alt=""
            aria-hidden
            className={styles.image}
          />
        )}

        <Heading className={classnames(displayFont, styles.title)}>
          <Link to={slug}>{title}</Link>
        </Heading>
        <p>{published}</p>
      </header>

      <section>
        <p>{summary}</p>
        <Link to={slug} className={styles.link} tabIndex={-1}>
          <VisuallyHidden>Read More: {title}</VisuallyHidden>
        </Link>
      </section>
    </article>
  );
};

export default PostSummary;
