import React from 'react';

import PostSummary from './post-summary';
import type { PostProps } from './post-summary';

export type PostListProps = {
  title: string;
  postsData: PostProps[];
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5';
};

const PostList = ({ postsData }: PostListProps) => (
  <section className="w-full">
    <ul>
      {postsData.map((postData) => (
        <li key={postData.slug}>
          <PostSummary className="mb-8" {...postData} />
        </li>
      ))}
    </ul>
  </section>
);

export default PostList;
