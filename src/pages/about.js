import React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../scss/main.scss";

const About = ({ data }) => (
    <div>
        <Header title={data.site.siteMetadata.title} />
        <div className="wrapper">
            <h1>About Us</h1>
            <p>
                A Question of Code is a podcast that each episode takes an
                interesting question that’s come up in Ed’s first year of
                learning to code and delves deeper into the answer in order to
                help those starting out with their first steps in programming
                (as well as helping Ed!).
            </p>
            <p>
                Ed is currently a teacher and is looking at getting a career in
                programming and has been learning to code for just over a year.
                He noticed certain questions come up again and again when people
                are learning to code and realised this could be useful for other
                newbie coders. Fortunately, Tom has been working as a coder for
                a few years and has the answers Ed needs, or does he?
            </p>
            <p>
                Hopefully Ed (with his insights into learning), and Tom (with
                his knowledge of the industry) can help you as you learn to
                code. Choose an episode that stands out to you or just follow
                along with each episode in their journey as Ed comes across ups
                and downs in his efforts to change career and get a job in tech.
            </p>
        </div>
        <Footer />
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
