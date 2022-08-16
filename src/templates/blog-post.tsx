import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import Content from '../components/content';

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  return (
    <Layout location={location}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ContentHeader
          title={post.frontmatter.title}
          description={post.frontmatter.summary}
          published={post.frontmatter.published}
          image={{
            src: post.frontmatter.cover,
            alt: post.frontmatter.title,
            credit: post.frontmatter.cover_credit,
            creditLink: post.frontmatter.cover_credit_link,
          }}
        />

        <Content
          isBlogPost={true}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />

        <footer>
          <Bio />
        </footer>
      </article>

      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.summary || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        published(formatString: "MMMM DD, YYYY")
        title
        summary
        cover {
          childImageSharp {
            gatsbyImageData(width: 720)
          }
        }
        cover_alt
        cover_credit
        cover_credit_link
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
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
