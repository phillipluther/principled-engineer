import classnames from 'classnames';
import React from 'react';

import PostSummary from '../post-summary';
import { PostProps } from '../post-summary';
import * as styles from './post-list.module.css';

export type PostListProps = {
  title: string;
  postsData: PostProps[];
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5';
};

const PostList = ({ postsData }: PostListProps) => (
  <section className={classnames(styles.wrapper)}>
    <ul>
      {postsData.map((postData) => (
        <li key={postData.slug}>
          <PostSummary className={styles.summary} {...postData} />
        </li>
      ))}
    </ul>
  </section>
);

export default PostList;
