module.exports = {
    siteMetadata: {
        title: `A question of code`,
        siteURL: "https://aqoc.dev",
        feed: `https://feeds.transistor.fm/a-question-of-code`,
        itunes: `https://itunes.apple.com/gb/podcast/a-question-of-code/id1448750157`,
        twitter: `https://twitter.com/aQoCode`,
        overcast: `https://overcast.fm/itunes1448750157/a-question-of-code`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-plugin-sharp`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 864,
                            linkImagesToOriginal: false,
                            showCaptions: true,
                            wrapperStyle: "max-width: 100% !important;"
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/episodes`
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/images/favicon.png",
                icons: {
                    twitter: true
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-36655973-3"
                //   // Puts tracking script in the head instead of the body
                //   head: false,
                //   // Setting this parameter is optional
                //   anonymize: true,
                //   // Setting this parameter is also optional
                //   respectDNT: true,
                //   // Avoids sending pageview hits from custom paths
                //   exclude: ["/preview/**", "/do-not-track/me/too/"],
                //   // Enables Google Optimize using your container Id
                //   optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                //   // Enables Google Optimize Experiment ID
                //   experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                //   // Set Variation ID. 0 for original 1,2,3....
                //   variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                //   // Any additional create only fields (optional)
                //   sampleRate: 5,
                //   siteSpeedSampleRate: 10,
                //   cookieDomain: "example.com",
            }
        }
    ]
};
