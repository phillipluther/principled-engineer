import classnames from 'classnames';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Flourish from '../flourish';
import * as styles from './content-header.module.css';

export type ContentHeaderProps = {
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  title: React.ReactNode;
  description?: string;
  published?: string;
  image?: {
    src: IGatsbyImageData;
    alt: string;
    credit?: string;
    creditLink?: string;
  };
  [key: string]: unknown;
};

const ContentHeader = ({
  as: Tag = 'header',
  headingLevel: Heading = 'h1',
  title,
  description,
  published,
  image,
  ...props
}: ContentHeaderProps) => {
  const coverImage = image?.src ? getImage(image.src) : null;

  return (
    <Tag className={styles.wrapper} {...props}>
      <Flourish className={styles.flourish} />

      <Heading className={classnames(styles.title)}>{title}</Heading>

      {published && <p className={styles.date}>{published}</p>}

      {description && (
        <>
          <Flourish className={classnames(styles.flourish)} flipped />
          <p className={styles.description}>{description}</p>
        </>
      )}

      {!description && (
        <Flourish className={classnames(styles.flourish)} flipped />
      )}

      {coverImage && (
        <figure className={styles.image}>
          <GatsbyImage
            image={coverImage}
            alt={image?.alt || title?.toString() || 'The Principled Engineer'}
          />

          {image?.credit && (
            <figcaption className={styles.credit}>
              <>
                Cover image by{` `}
                {image.creditLink ? (
                  <a href={image.creditLink}>{image.credit}</a>
                ) : (
                  <span>{image.credit}</span>
                )}
              </>
            </figcaption>
          )}
        </figure>
      )}
    </Tag>
  );
};

export default ContentHeader;
