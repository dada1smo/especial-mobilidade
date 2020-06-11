/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Especial Mobilidade',
  },
  plugins: [
    'gatsby-plugin-sass',
    { 
      resolve: `gatsby-plugin-webfonts`, 
      options: { 
        fonts: { 
          google: [ 
            { 
              family: "Red+Hat+Display", 
              variants: ["900"], 
            }, 
            { 
              family: "IBM+Plex+Mono", 
              variants: ["400"], 
            }, 
            { 
              family: "IBM+Plex+Sans", 
              variants: ["400", "400i", "500"], 
            }, 
          ], 
        }, 
        //formats: ['woff2', 'woff'], 
        //useMinify: true, 
        //usePreload: true, 
        //usePreconnect: false, 
      }, 
    }, 
  ], 
} 

