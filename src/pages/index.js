import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PostList from '../components/post-list';

const title = 'The Principled Engineer: A Blog';
const description =
  'The Principled Engineer is a blog about building modern web applications with JavaScript, CSS, HTML, and the ecosystems associated with those technologies';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>No blog posts found.</p>
      </Layout>
    );
  }

  console.log('POSTS', posts);

  return (
    <Layout location={location} title={siteTitle}>
      <PostList
        title="All Posts"
        postsData={posts.map(({ frontmatter, fields, excerpt }) => ({
          slug: fields.slug,
          summary: excerpt,
          ...frontmatter,
        }))}
      />
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title={title} description={description} />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          published(formatString: "MMMM DD, YYYY")
          title
          summary
          cover {
            childImageSharp {
              gatsbyImageData(width: 720)
            }
          }
        }
      }
    }
  }
`;

// id: string;
// markdown: string;
// title: string;
// author: string;
// slug: string;
// summary?: string;
// published: string;
// tags?: string[];
// keywords?: string[];
// series?: string;
// cover?: IGatsbyImageData;
// cover_credit?: string;
// cover_credit_link?: string;
// cover_alt?: string;
