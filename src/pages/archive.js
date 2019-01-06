import React from "react";
import { css } from "emotion";
import { Link, graphql } from "gatsby";

import Header from "../components/Header";

import "../scss/main.scss";

export default ({ data }) => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <div>
                    <h1>Archive</h1>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link key={node.id} to={node.fields.slug}>
                            <h2
                                css={css`
                                    font-weight: bold;
                                `}
                            >
                                {node.frontmatter.title}
                            </h2>
                            <span
                                className="test_subtitle"
                                css={css`
                                    color: #bbb;
                                    font-style: italic;
                                `}
                            >
                                — {node.frontmatter.date}
                            </span>
                        </Link>
                    ))}
                </div>
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
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
