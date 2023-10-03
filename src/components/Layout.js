import { Link } from "gatsby"; // preloading
import React from "react";
import '../styles/global.css'
import {
    innerContainer,
    outerContainer,
    sideNav,
    content,
    active,
} from '../styles/layout.module.css'

const isActive = ({isCurrent}) => {
    // return isCurrent ? {className: 'active'} : null
    return isCurrent ? {className: active} : null
}


const  Navbar = () => {
    return (
        <div className={sideNav}>
            <nav>
                <Link to="/" getProps={isActive}><div>about</div></Link>
                <Link to="/research" getProps={isActive}><div>research</div></Link>
                <Link to="/photography" getProps={isActive}><div>photography</div></Link>
                <Link to="/experience" getProps={isActive}><div>experience</div></Link>
                <Link to="/test" getProps={isActive}><div>test</div></Link>
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
