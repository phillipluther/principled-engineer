import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from 'gatsby-plugin-image';
import React from 'react';

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
  const imageClasses = '-ml-4 -mt-4 -mr-4 md:-ml-6 md:-mt-6 md:-mr-6';

  return (
    <Content
      as="article"
      className={classnames(
        'relative',
        'prose prose-brando',
        'p-4',
        'md:p-6',
        'bg-brando-200',
        'md:w-1/2',
        className
      )}
      compact
    >
      <header>
        <Link to={slug} tabIndex={-1} aria-hidden>
          {coverImage ? (
            <GatsbyImage image={coverImage} alt="" className={imageClasses} />
          ) : (
            <StaticImage
              src="../../images/social-card.jpg"
              width={720}
              height={405}
              alt=""
              className={imageClasses}
            />
          )}
        </Link>

        <Heading className="!mt-4 md:!mt-6 text-3xl md:text-2xl">
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
