import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import EpisodeSummary from "../components/EpisodeSummary";

import "../scss/main.scss";

export default ({ data }) => {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <h3 className="heading--label">All episodes:</h3>
                <div className="archive__list">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <EpisodeSummary episode={node} key={node.id} />
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
                        date(formatString: "YYYYMMDD")
                        number
                        summary
                        featured
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
