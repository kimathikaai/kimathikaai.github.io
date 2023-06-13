import { Link } from "gatsby"; // preloading
import React from "react";

export default function Navbar() {
    return (
        <nav>
            <h1>Navigation</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/research">Research</Link>
            </div>
        </nav>
    )
}
