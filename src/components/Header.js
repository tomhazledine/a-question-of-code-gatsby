import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { css } from "emotion";

const Header = () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        feed
                    }
                }
            }
        `}
        render={data => (
            <div
                className={css`
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                `}
            >
                <div
                    className={css`
                        display: flex;
                    `}
                >
                    <svg
                        className={css`
                            display: block;
                            fill: black;
                            width: 3rem;
                            height: 3rem;
                            margin: 0.5rem 1rem 0 0;
                        `}
                        viewBox="0 0 220 220"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <path
                            d="M110.09295,125.69093 C125.362988,116.984015 145.14542,119.14542 158.175144,132.175144 C173.796116,147.796116 173.796116,173.122715 158.175144,188.743687 C142.554173,204.364658 117.227573,204.364658 101.606602,188.743687 C89.312834,176.449919 86.6943111,158.144725 93.7510329,143.290138 L13.7433803,63.2824856 L13.986021,63.0398449 L-29.6726189,19.381205 L-12.7020561,2.41064222 L33.2806999,48.3933983 L91.7957826,48.3933983 C93.6633341,42.4361312 96.9572964,36.8295001 101.67767,32.109127 C117.298641,16.4881554 142.62524,16.4881554 158.246212,32.109127 C173.867184,47.7300987 173.867184,73.0566979 158.246212,88.6776695 C142.62524,104.298641 117.298641,104.298641 101.67767,88.6776695 C96.9572964,83.9572964 93.6633341,78.3506653 91.7957826,72.3933983 L56.7954185,72.3933983 L110.09295,125.69093 Z M115.819805,74.5355339 C123.630291,82.3460197 136.293591,82.3460197 144.104076,74.5355339 C151.914562,66.7250481 151.914562,54.0617485 144.104076,46.2512627 C136.293591,38.4407768 123.630291,38.4407768 115.819805,46.2512627 C108.009319,54.0617485 108.009319,66.7250481 115.819805,74.5355339 Z M115.748737,174.601551 C123.559223,182.412037 136.222523,182.412037 144.033009,174.601551 C151.843494,166.791065 151.843494,154.127766 144.033009,146.31728 C136.222523,138.506794 123.559223,138.506794 115.748737,146.31728 C107.938252,154.127766 107.938252,166.791065 115.748737,174.601551 Z"
                            id="Combined-Shape"
                            fillRule="nonzero"
                        />
                    </svg>
                    <Link to="/">
                        {/* <h1>{data.site.siteMetadata.title}</h1> */}
                        <h3>aQoC</h3>
                    </Link>
                </div>
                <ul
                    className={css`
                        display: flex;
                        justify-content: space-between;
                        li {
                            margin: 0 0.5em;
                            list-style: none;
                        }
                    `}
                >
                    <li>
                        <a href={data.site.siteMetadata.feed} target="_blank">
                            RSS
                        </a>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/archive">All Shows</Link>
                    </li>
                </ul>
            </div>
        )}
    />
);

export default Header;
