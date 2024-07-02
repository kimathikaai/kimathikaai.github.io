import * as React from "react"
import Layout from "../components/Layout"
import profile from '../../static/profile.png'
import * as ms from '../styles/index.module.css'
import '../styles/index.module.css'

import * as IoIcons from 'react-icons/io5'
import * as SiIcons from 'react-icons/si'

const NetworkIcons = () => {
    return (
        <ul>
            <li><a target="_blank" rel="noopener" href="https://github.com/kimathikaai"><IoIcons.IoLogoGithub /></a></li>
            <li><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/kimathikaai/"><IoIcons.IoLogoLinkedin /></a></li>
            <li><a target="_blank" rel="noopener" href="https://scholar.google.ca/citations?user=XpCEjJ4AAAAJ&hl=en"><SiIcons.SiGooglescholar /></a></li>
            <li><a target="_blank" rel="noopener" href="mailto: kkaai@uwaterloo.ca"><IoIcons.IoMailOpen /></a></li>
        </ul>
    )
}

const NetworkIconsV2 = () => {
    return (
        <>
           <a target="_blank" rel="noopener" href="https://github.com/kimathikaai"><IoIcons.IoLogoGithub /></a>
           <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/kimathikaai/"><IoIcons.IoLogoLinkedin /></a>
           <a target="_blank" rel="noopener" href="https://scholar.google.ca/citations?user=XpCEjJ4AAAAJ&hl=en"><SiIcons.SiGooglescholar /></a>
           <a target="_blank" rel="noopener" href="mailto: kkaai@uwaterloo.ca"><IoIcons.IoMailOpen /></a>
        </>
    )

}

const IndexPage = () => {
    return (
        <Layout center={true}>
            <>
                <div className={ms.profileHeader}>
                    <h1>KIMATHI KAAI</h1>
                </div>
                <div className={ms.profile}>
                    <div className={ms.media}>
                        <img src={profile} alt='Profile picture' />
                        <div className={ms.network}>
                            <NetworkIconsV2 />
                        </div>
                    </div>
                    <div className={ms.details}>
                        <div className={ms.profileName}>
                            <h1>KIMATHI KAAI</h1>
                        </div>
                        <p>
                            Hello! I am a <a href="https://uwaterloo.ca/" target="_blank" rel="noopener">University of Waterloo</a> MASc 
                            student in the <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" rel="noopener">SYDE Department</a> under
                            the supervision of Prof. <a href="https://sirisharambhatla.com/" target="_blank" rel="noopener">Sirisha Rambhatla</a> and 
                            Prof. <a href="https://www.eng.uwaterloo.ca/~a28wong/" target="_blank" rel="noopener">Alexander Wong</a>. 
                        </p>
                        <p>
                            My research focuses on developing machine learning models that can generalize
                            to new data distributions without needing labels.
                            I conduct my research as part of the <a href="https://vip.uwaterloo.ca/" target="_blank" rel="noopener">Vision and Image Processing</a> and <a href="https://sirisharambhatla.com/criticalml/" target="_blank" rel="noopener">Critical Machine Learning</a> labs. 
                        </p>
                    </div>
                </div>
                <div className={ms.footer}>
                    &copy; Copyright 2023 Kimathi Kaai
                </div>
            </>
        </Layout>
    )
}

export const Head = () => <title>Kimathi | About</title>

export default IndexPage
