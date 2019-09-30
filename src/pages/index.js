import React from "react";
import { graphql, Link } from "gatsby";

import Header from "../components/Header";
import PodcastLinks from "../components/PodcastLinks";
import Logo from "../components/Logo";
import EpisodeFeatured from "../components/EpisodeFeatured";
import EpisodeSummary from "../components/EpisodeSummary";
import Footer from "../components/Footer";

import "../scss/main.scss";

export default ({ data }) => {
    const allEpisodes = data.allMarkdownRemark.edges
        .map(({ node }) => node)
        .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
    const latest = allEpisodes[0];
    const featured = allEpisodes
        .filter(ep => ep.id !== latest.id && ep.frontmatter.featured)
        .slice(0, 5);

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
                    <div className="home__question">
                        <a href="mailto:aquestionofcode@gmail.com">
                            Ask us a question!
                        </a>
                    </div>
                    <PodcastLinks />
                </div>
                <div className="block--featured">
                    <h3 className="heading--label">Latest episode:</h3>
                    <EpisodeFeatured episode={latest} />
                </div>
                <div className="block--regular">
                    <h3 className="heading--label">Popular episodes:</h3>
                    {featured.map(node => (
                        <EpisodeSummary episode={node} key={node.id} />
                    ))}
                    <Link className="block__cta" to="/archive">
                        All episodes...
                    </Link>
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
