module.exports = {
    siteMetadata: {
        title: `A question of code`,
        feed: `https://feeds.transistor.fm/a-question-of-code`,
        itunes: `https://itunes.apple.com/gb/podcast/a-question-of-code/id1448750157`,
        twitter: `https://twitter.com/aQoCode`,
        overcast: `https://overcast.fm/itunes1448750157/a-question-of-code`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
