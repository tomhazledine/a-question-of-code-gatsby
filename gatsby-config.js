module.exports = {
    siteMetadata: {
        title: `A question of code`,
        feed: `https://feeds.transistor.fm/a-question-of-code`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
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
        }
    ]
};
