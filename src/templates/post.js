import React from "react";
import { graphql } from "gatsby";
import { css } from "emotion";
import moment from "moment";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Headshots from "../components/Headshots";
import Player from "../components/Player";
import Footer from "../components/Footer";

import Logo from "../images/aqoc_cover.jpg";

import "../scss/main.scss";

const post = ({ data, location }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Helmet>
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:creator"
                    content={data.site.siteMetadata.twitter}
                />
                <meta property="og:url" content={location.href} />
                <meta
                    property="og:title"
                    content={`Episode ${post.frontmatter.number}: ${post.frontmatter.title}`}
                />
                <meta
                    property="og:description"
                    content={post.frontmatter.summary}
                />
                <meta property="og:image" content={Logo} />
            </Helmet>
            <Header />
            <div className="wrapper">
                <div className="post__header">
                    <h1 className="title--page">{post.frontmatter.title}</h1>
                    <span
                        className="subtitle--post"
                        css={css`
                            color: #bbb;
                            font-style: italic;
                        `}
                    >
                        {moment(post.frontmatter.date, "YYYYMMDD").format(
                            "Do MMM, Y"
                        )}
                    </span>
                </div>
                <div className="post__content">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <Player
                        className="post__player"
                        url={post.frontmatter.audio}
                    />
                    <h2>Get in touch</h2>
                    <Headshots />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default post;

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                number
                audio
                date
                summary
            }
        }
        site {
            siteMetadata {
                twitter
            }
        }
    }
`;
