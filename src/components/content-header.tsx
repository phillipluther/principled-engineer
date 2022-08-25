import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Flourish from './flourish';

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
    <Tag className="text-center" {...props}>
      <Flourish className="my-8 max-w-md" />

      <Heading className="font-display font-medium text-brando-800 text-5xl leading-[1.15] drop-shadow-text-offset md:text-7xl md:leading-tight">
        {title}
      </Heading>

      {published && <p className="text-brando-600 my-[2rem]">{published}</p>}

      {description && (
        <>
          <Flourish className="my-8 max-w-md" flipped />
          <p className="text-2xl italic my-8 leading-relaxed md:max-w-xl md:mx-auto">
            {description}
          </p>
        </>
      )}

      {!description && <Flourish className="my-8 max-w-md" flipped />}

      {coverImage && (
        <figure className="-ml-4 -mr-4 md:-ml-6 md:-mr-6 md:mt-12">
          <GatsbyImage
            image={coverImage}
            alt={image?.alt || title?.toString() || 'The Principled Engineer'}
          />

          {image?.credit && (
            <figcaption className="text-left ml-4 mt-2 mb-8 text-sm italic text-brando-500">
              <>
                Cover image by{` `}
                {image.creditLink ? (
                  <a href={image.creditLink} className="text-brando-600">
                    {image.credit}
                  </a>
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
