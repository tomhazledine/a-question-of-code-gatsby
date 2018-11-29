import React from "react";
import { css } from "emotion";
import { graphql, Link } from "gatsby";

import Header from "../components/Header";

export default ({ data }) => {
    return (
        <div>
            <Header />
            Hello world!
            <hr />
            <div>
                <h1>My Posts</h1>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <span
                            className={css`
                                color: #bbb;
                            `}
                        >
                            — {node.frontmatter.date}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
`;
