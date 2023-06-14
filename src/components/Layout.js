import { Link } from "gatsby"; // preloading
import React from "react";
import '../styles/global.css'
import {
  navLinks,
  navLinkText
} from '../styles/layout.module.css'

const  Navbar = () => {
    return (
        <div>
            <nav>
                <ul className={navLinks}>
                    <li><Link to="/" className={navLinkText}>Home</Link></li>
                    <li><Link to="/about" className={navLinkText}>About</Link></li>
                    <li><Link to="/research" className={navLinkText}>Research</Link></li>
                    <li><Link to="/photography" className={navLinkText}>Photography</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Copyright 2023 Kimathi Kaai</p>
            </footer>
        </div>
    )
}
