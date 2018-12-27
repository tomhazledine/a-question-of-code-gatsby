import React from "react";
import { css } from "emotion";
import { Link, graphql } from "gatsby";

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
                    <Link key={node.id} to={node.fields.slug}>
                        <h2>{node.frontmatter.title}</h2>
                        <span
                            className={css`
                                color: #bbb;
                            `}
                        >
                            — {node.frontmatter.date}
                        </span>
                    </Link>
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
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
