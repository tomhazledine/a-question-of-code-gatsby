import React from "react";
import { graphql } from "gatsby";
// import { css } from "emotion";

import Header from "../components/Header";
import PodcastLinks from "../components/PodcastLinks";
import Headshots from "../components/Headshots";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
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
            <div className="wrapper">
                <div className="home__header">
                    <Logo />
                    <h2 className="home__summary">
                        A newbie coder and a seasoned veteran discuss the
                        questions that always come up when someone begins
                        learning to code.
                    </h2>
                    <PodcastLinks />
                </div>
                <div className="block--featured">
                    <h3 className="heading--label">Latest episode:</h3>
                    <EpisodeFeatured episode={latest} />
                </div>
                <Headshots />
                <div className="block--regular">
                    <h3 className="heading--label">...and the rest:</h3>
                    {theRest.map(node => (
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
                        number
                        date(formatString: "YYYYMMDD")
                        summary
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
