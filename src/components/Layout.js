import { Link } from "gatsby"; // preloading
import React, {useState} from "react";
import '../styles/global.css'
import * as ms from "../styles/layout.module.css"
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


export default function Layout({ children }) {
    const [isSidebarExtended, setSidebarExtended] = useState(false);
    // <Link to="/test" getProps={isActive}><div>test</div></Link>

    return (
        <div className={outerContainer}>
            <button 
                className={ms.header}
                onClick={() => {setSidebarExtended(!isSidebarExtended)}}
            >
                <IoIcons.IoMenuOutline  className={navIcon}/>
            </button>

            <div className={innerContainer}>

                <div className={`${ms.sideNav} ${isSidebarExtended ? '' : ms.closed}`}>
                    <nav>
                        <Link to="/" getProps={isActive}><div>about</div></Link>
                        <Link to="/research" getProps={isActive}><div>research</div></Link>
                        <Link to="/experience" getProps={isActive}><div>experience</div></Link>
                        <Link to="/photography" getProps={isActive}><div>photography</div></Link>
                    </nav>
                </div>

                <div className={`${ms.content} ${isSidebarExtended ? ms.closed : ''}`}>
                    { children }
                </div>

            </div>

        </div>
    )
}
