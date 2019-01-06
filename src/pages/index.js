import React from "react";
import { graphql } from "gatsby";

import Header from "../components/Header";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeSummary from "../components/EpisodeSummary";

import "../scss/main.scss";

export default ({ data }) => {
    const allEpisodes = data.allMarkdownRemark.edges
        .map(({ node }) => node)
        .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
    const latest = allEpisodes[0];
    const theRest = allEpisodes.filter(ep => ep.id !== latest.id);

    return (
        <div>
            <Header />
            <h1>A Question of Code</h1>
            <h2>
                A newbie coder and a seasoned veteran discuss the questions that
                always come up when someone begins learning to code.
            </h2>
            <hr />
            <div>
                <h2>Latest episode:</h2>
                <EpisodeFeatured episode={latest} />
                <h3>...and the rest:</h3>
                {theRest.map(node => (
                    <EpisodeSummary episode={node} key={node.id} />
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
                        number
                        date(formatString: "YYYYMMDD")
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
