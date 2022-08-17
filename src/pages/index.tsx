import { graphql } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import PostList from '../components/post-list';
import Seo from '../components/seo';

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
    allMarkdownRemark(
      sort: { fields: [frontmatter___published], order: DESC }
    ) {
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
