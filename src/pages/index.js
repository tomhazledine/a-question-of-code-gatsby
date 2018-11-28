import React from "react";
import { Link } from "gatsby";

import Header from "../components/Header";

export default () => (
    <div>
        <Header />
        Hello world!
        <hr />
        <Link to="about">About</Link>
    </div>
);
