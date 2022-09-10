import * as React from 'react';
import { VisuallyHidden } from 'react-aria';

import Seo from '../components/seo';
import CodeGoodCodeWell from '../images/code-good-code-well.inline.svg';
import Logo from '../images/principled-engineer-logo.inline.svg';

const title = 'The Principled Engineer: A Blog';
const description =
  'Phillip Luther, who briefly blogged as The Principled Engineer, is now writing at https://phillipluther.dev; same content with a pinch less bluster';

const BlogIndex = () => (
  <div className="p-12 container mx-auto">
    <h1>
      <VisuallyHidden elementType="span">{title}</VisuallyHidden>
      <Logo className="mx-auto w-full" />
    </h1>

    <CodeGoodCodeWell className="w-1/2 max-w-full mx-auto h-12 mt-6 mb-12" />

    <p className="prose mx-auto">
      I'm now writing over at{' '}
      <a href="https://phillipluther.dev">phillipluther.dev</a>; same content
      with a pinch less bluster.
    </p>
  </div>
);

export default BlogIndex;
export const Head = () => <Seo title={title} description={description} />;
