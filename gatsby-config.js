module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-lyrid",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-express',
      options: {
        output: 'gatsby-express.json',
      }
    }
  ],
};
