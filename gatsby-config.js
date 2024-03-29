module.exports = {
  siteMetadata: {
    title: "portfolio-2021",
    siteUrl: "https://nvnrtnl.vercel.app"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    'gatsby-plugin-resolve-src',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-2021`,
        short_name: `portfolio-2021`,
        start_url: `/`,
        icon: 'src/images/favicon.png'
      },
    },
  ],
};
