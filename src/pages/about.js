import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";

const About = ({ data }) => (
    <div>
        <Header title={data.site.siteMetadata.title} />
        <h1>About</h1>
    </div>
);

export default About;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
