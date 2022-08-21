import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from 'gatsby-plugin-image';
import React from 'react';
import { VisuallyHidden } from 'react-aria';

import Content from './content';

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
    <Content
      as="article"
      className={classnames(
        'relative',
        'prose prose-brando',
        'p-4',
        'bg-brando-200',
        className
      )}
      compact
    >
      <header>
        <Link to={slug} tabIndex={-1} aria-hidden>
          {coverImage ? (
            <GatsbyImage
              image={coverImage}
              alt=""
              className="-ml-4 -mt-4 -mr-4"
            />
          ) : (
            <StaticImage
              src="../../images/social-card.jpg"
              width={720}
              height={405}
              alt=""
              className="-ml-4 -mt-4 -mr-4"
            />
          )}
        </Link>

        <Heading className="!mt-4 text-3xl">
          <Link to={slug} className="no-underline focus:underline">
            {title}
          </Link>
        </Heading>
        <p>{published}</p>
      </header>

      <section>
        <p>{summary}</p>
      </section>
    </Content>
  );
};

export default PostSummary;
