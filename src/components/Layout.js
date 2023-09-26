import { Link } from "gatsby"; // preloading
import React from "react";
import '../styles/global.css'
import {
    navLinks,
    navLinkText,
    innerContainer,
    outerContainer,
    sideNav,
    content,
} from '../styles/layout.module.css'


const  Navbar = () => {
    return (
        <div className={sideNav}>
            <nav>
                <Link to="/" className={navLinkText}><div>about</div></Link>
                <Link to="/research" className={navLinkText}><div>research</div></Link>
                <Link to="/photography" className={navLinkText}><div>photography</div></Link>
                <Link to="/experience" className={navLinkText}><div>experience</div></Link>
            </nav>
        </div>
    )
}

export default function Layout({ children }) {
    return (
        <div className={outerContainer}>
            <div className={innerContainer}>
                <Navbar />
                <div className={content}>
                    { children }
                </div>
            </div>

            <footer>
                &copy; Copyright 2023 Kimathi Kaai
            </footer>
        </div>
    )
}
