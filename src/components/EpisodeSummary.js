import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

const EpisodeSummary = ({ episode }) => (
    <Link key={episode.id} to={episode.fields.slug}>
        <h2
            css={css`
                font-weight: bold;
            `}
        >
            {episode.frontmatter.number}: {episode.frontmatter.title}
        </h2>
        <span
            className="test_subtitle"
            css={css`
                color: #bbb;
                font-style: italic;
            `}
        >
            — {episode.frontmatter.date}
        </span>
    </Link>
);

export default EpisodeSummary;
