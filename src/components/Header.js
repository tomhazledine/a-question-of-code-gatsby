import React from "react";
import { Link } from "gatsby";

const Header = () => (
    <div>
        <h1>A Question of Code</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
);

export default Header;
