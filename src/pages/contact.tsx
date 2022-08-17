import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import Content from '../components/content';

const pageTitle = 'Contact';
const pageDescription =
  'On methods one might employ to contact the author and maintainer of The Principled Engineer';

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <ContentHeader title={pageTitle} description={pageDescription} />
    <Content as="section">
      <p>
        Have a question about the blog? Need to contact me — Phil, the author —
        about something? Found a serious piece of wonk?
      </p>

      <p>Please reach out!</p>

      <h2>By Email</h2>
      <p>
        Email's the best way to get in touch with me because I'm old-fashioned
        like that. Drop a line to{' '}
        <a href="mailto:hello@principled.engineer">hello@principled.engineer</a>
        .
      </p>

      <h2>On Twitter</h2>
      <p>
        I'm not on Facebook or anything Facebook-related; I do have a Principled
        Engineer Twitter account, though! A thoughtful message to{' '}
        <a href="https://twitter.com/principledeng">@principledeng</a> works
        almost as well as email.
      </p>
    </Content>
  </Layout>
);

export const Head = () => (
  <Seo title={pageTitle} description={pageDescription} />
);

export default ContactPage;
