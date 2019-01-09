import React from "react";
import { graphql } from "gatsby";
import { css } from "emotion";
import moment from "moment";

import Header from "../components/Header";

const post = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Header />
            <div className="wrapper">
                <h1>{post.frontmatter.title}</h1>
                <span
                    className="test_subtitle"
                    css={css`
                        color: #bbb;
                        font-style: italic;
                    `}
                >
                    {moment(post.frontmatter.date, "YYYYMMDD").format(
                        "Do MMM, Y"
                    )}
                </span>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <span>{post.frontmatter.audio}</span>
                <audio src={post.frontmatter.audio} />
            </div>
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
