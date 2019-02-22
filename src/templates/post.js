import React from "react";
import { graphql } from "gatsby";
import { css } from "emotion";
import moment from "moment";

import Header from "../components/Header";
import Headshots from "../components/Headshots";
import Player from "../components/Player";
import Footer from "../components/Footer";

import "../scss/main.scss";

const post = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
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
                audio
                date
            }
        }
    }
`;
