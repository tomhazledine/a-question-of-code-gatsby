import React from "react";

const Player = ({ url }) => (
    <audio controls src={url}>
        Your browser does not support the
        <code>audio</code> element.
    </audio>
);

export default Player;
