module.exports = {
  siteMetadata: {
    title: 'The Principled Engineer',
    author: 'Phillip Luther',
    description:
      'A blog about building modern web applications with JavaScript, CSS, HTML; ethics in software engineering; and developer culture',
    siteUrl: 'https://principled.engineer',
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Principled Engineer`,
        short_name: `Principled`,
        start_url: `/`,
        background_color: `#292919`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/principled-engineer-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
