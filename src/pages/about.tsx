import * as React from 'react';

import Content from '../components/content';
import ContentHeader from '../components/content-header';
import Layout from '../components/layout';
import Seo from '../components/seo';

const pageTitle = 'About';
const pageDescription =
  'On the particular type of topics found on this blog, the Principled Engineer, and why one might find oneself inclined to read more';

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <ContentHeader title={pageTitle} description={pageDescription} />
    <Content as="section" className="mx-auto">
      <h2>About the Blog</h2>

      <p>
        The Principled Engineer is a blog about building web applications. It
        focuses heavily on modern JavaScript and the associated ecosystems.
        Popular topics include developer experience, engineering culture, and
        the good and ill of industry standards.
      </p>

      <p>
        The blog often explores ethics and responsibility in application
        engineering, too. That's responsibility to our users — making
        responsible and helpful choices for the good of the user, especially
        when those goals might run contrary to the goals of the application.
      </p>

      <p>
        As such, consider this a fair warning that things might get finger-waggy
        at times. The Principled Engineer is some dude's personal blog. It's
        editorial, not journalism.
      </p>

      <p>
        And while it make look so, fear not! Not everything on this blog reads
        like Dickens.
      </p>

      <h2>About the Author</h2>

      <p>
        My name is Phillip Luther. I go by Phil. I'm the creator of and sole
        contributor to the Principled Engineer. Any references to "I" or "me" on
        this site refer to me, Phillip Luther. Who goes by Phil. And who is the
        creator of and sole contributor to the Principled Engineer.
      </p>

      <p>
        Semi-related, bios are hard. Each post sports an "About the Author"
        blurb, though. Those'll have to do for now and I'll commit to building
        out this page as the blog grows.
      </p>
    </Content>
  </Layout>
);

export const Head = () => (
  <Seo title={pageTitle} description={pageDescription} />
);

export default AboutPage;
