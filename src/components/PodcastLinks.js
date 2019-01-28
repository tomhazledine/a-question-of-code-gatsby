import React from "react";
import { StaticQuery, graphql } from "gatsby";

const PodcastLinks = () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        itunes
                        feed
                        twitter
                        overcast
                    }
                }
            }
        `}
        render={data => (
            <div className="sharing">
                <h3 className="sharing__title">Listen wherever you like:</h3>
                <ul className="sharing__links">
                    <li className="sharing__link">
                        <a
                            href={data.site.siteMetadata.feed}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            RSS
                        </a>
                    </li>
                    <li className="sharing__link">
                        <a
                            href={data.site.siteMetadata.itunes}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apple Podcasts
                        </a>
                    </li>
                    <li className="sharing__link">
                        <a
                            href={data.site.siteMetadata.overcast}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Overcast
                        </a>
                    </li>
                </ul>
            </div>
        )}
    />
);

export default PodcastLinks;
