import React from "react";
import HeadshotEd from "../images/headshot_ed_bw.jpg";
import HeadshotTom from "../images/headshot_tom_bw.jpg";

const Headshots = ({ episode }) => (
    <div className="headshots">
        <div className="headshot">
            <div
                className="headshot__photo"
                style={{
                    backgroundImage: `url('${HeadshotEd}')`
                }}
            />
            <a href="https://twitter.com/edPython" className="headshot__link">
                @edPython
            </a>
        </div>
        <div className="headshot">
            <div
                className="headshot__photo"
                style={{
                    backgroundImage: `url('${HeadshotTom}')`
                }}
            />
            <a
                href="https://twitter.com/thomashazledine"
                className="headshot__link"
            >
                @thomashazledine
            </a>
        </div>
    </div>
);

export default Headshots;
