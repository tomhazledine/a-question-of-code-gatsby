module.exports = {
    siteMetadata: {
        title: `A question of code`
    },
    plugins: [
        `gatsby-plugin-emotion`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`
            }
        }
    ]
};
