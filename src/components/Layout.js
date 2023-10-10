import { Link } from "gatsby"; // preloading
import React, {useState} from "react";
import '../styles/global.css'
import * as moduleStyles from "../styles/layout.module.css"
import {
    innerContainer,
    outerContainer,
    sideNav,
    content,
    header,
    active,
    extended,
    navIcon,
} from '../styles/layout.module.css'

import * as IoIcons from 'react-icons/io5'

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
                <Link to="/experience" getProps={isActive}><div>experience</div></Link>
                <Link to="/photography" getProps={isActive}><div>photography</div></Link>
                <Link to="/test" getProps={isActive}><div>test</div></Link>
            </nav>
        </div>
    )
}

const Header = ({isOpen, toggleOpen}) => {
    return (
        <button 
            className={`${moduleStyles.header} ${isOpen ? moduleStyles.headerBorder : ''}`}
            onClick={toggleOpen}
        >
            <IoIcons.IoMenuOutline  className={navIcon}/>
        </button>
    )
}

export default function Layout({ children }) {
    const [isSidebarExtended, setSidebarExtended] = useState(true);

    const toggleSidebar = () => {
        if (isSidebarExtended == true) {
            setSidebarExtended(false);
        } else{
            setSidebarExtended(true); 
        }
    }

    return (
        <div className={outerContainer}>
            <Header isOpen={isSidebarExtended} toggleOpen={toggleSidebar}/>
            <div className={innerContainer}>
                <Navbar isExtended={isSidebarExtended}/>
                <div className={[content]}>
                    { children }
                </div>
            </div>

            <footer>
                &copy; Copyright 2023 Kimathi Kaai
            </footer>
        </div>
    )
}
