import * as React from 'react';
import { Link, graphql } from 'gatsby';
// import Prismjs from 'prismjs';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import Content from '../components/content';
import PostList from '../components/post-list';

const pageTitle = 'Page Not Found';
const pageDescription = `It would seem the page you're looking for doesn't exist. Or, more accurately, the page you tried to access doesn't exist at this location.`;

const NotFoundPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location} title={pageTitle}>
      <ContentHeader title={pageTitle} description={pageDescription} />
      <Content as="section">
        <h2>To Get Back on Track</h2>
        <p>
          <code className="language-js">{`if (isUrlOk || needsRefresh) {`}</code>
        </p>
        <p>
          Double-check the URL you used to get here and try refreshing this
          page.
        </p>
        <p>
          <code className="language-js">{`} else if (tryGlobalNav()) {`}</code>
        </p>
        <p>
          If that doesn't work, give the global navigation a shot. Head back to
          the Home page or the article listings and browse.
        </p>
        <p>
          <code className="language-js">{`} else if (tryLatestPost()) {`}</code>
        </p>
        <p>
          Here's the latest post from the blog; even if that isn't what you were
          looking for, might be worth a click to get back on the rails.
        </p>
        <PostList
          title="Latest Post"
          postsData={posts.map(({ frontmatter, fields, excerpt }) => ({
            slug: fields.slug,
            summary: excerpt,
            ...frontmatter,
          }))}
        />
        <p>
          <code className="language-js">{`} else {`}</code>
        </p>
        <p>
          If something seems truly busted, please{' '}
          <Link to="/contact">contact</Link> me and lemme know so I can fix it.
        </p>
        <p>
          <code className="language-js">}</code>
        </p>
      </Content>
    </Layout>
  );
};

export const Head = () => <Seo title={pageTitle} />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
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
