import React from "react";
import { css } from "emotion";
import { Link, graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../scss/main.scss";

export default ({ data }) => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <h1 className="title--page">Archive</h1>
                <div className="archive__list">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link
                            className="episode-item"
                            key={node.id}
                            to={node.fields.slug}
                        >
                            <h2 className="episode-item__title">
                                {node.frontmatter.title}
                            </h2>
                            <span className="episode-item__date">
                                — {node.frontmatter.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
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
