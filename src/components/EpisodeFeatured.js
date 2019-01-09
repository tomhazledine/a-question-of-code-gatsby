import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";
import moment from "moment";

const EpisodeFeatured = ({ episode }) => (
    <Link
        key={episode.id}
        to={episode.fields.slug}
        className="excerpt excerpt--featured"
    >
        <div className="excerpt__title">
            <span className="excerpt__title-number">
                {episode.frontmatter.number}:
            </span>{" "}
            <span className="exerpt__title-body">
                {episode.frontmatter.title}
            </span>
        </div>
        <span
            className="excerpt__date"
            css={css`
                color: #bbb;
                font-style: italic;
            `}
        >
            — {moment(episode.frontmatter.date, "YYYYMMDD").format("Do MMM, Y")}
        </span>
        <p className="excerpt--featured__summary">
            {episode.frontmatter.summary}
        </p>
    </Link>
);

export default EpisodeFeatured;
