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
              family: "Big+Shoulders+Text", 
              variants: ["400,500,700"], 
            }, 
            { 
              family: "Space+Mono", 
              variants: ["400,400i,500,500i,700,700i"], 
            }, 
            { 
              family: "Literata", 
              variants: ["400,400i,700,700i"], 
            }, 
          ], 
        }, 
        //formats: ['woff2', 'woff'], 
        //useMinify: true, 
        //usePreload: true, 
        //usePreconnect: false, 
      }, 
    }, 
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: [/\.inline\.svg$/, /\.map\.svg$/]
        },
      },
    },
  ], 
} 

