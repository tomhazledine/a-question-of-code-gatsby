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
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                    margin-bottom: 1em;
                `}
            >
                <Link to="/">
                    {/* <h1>{data.site.siteMetadata.title}</h1> */}
                    <h3>aQoC</h3>
                </Link>
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
                        <a href={data.site.siteMetadata.feed}>RSS</a>
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
