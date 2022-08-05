module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images/`
      },
    __key: "images"
    }, {
    resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog-posts",
        "path": `${__dirname}/src/updates/`
      },
    __key: "blogb-posts"
  },
  `gatsby-transformer-remark`,
]
};