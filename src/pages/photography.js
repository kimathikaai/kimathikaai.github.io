import * as React from 'react'
import Layout from "../components/Layout";
import {
    imageGroup
} from '../styles/photography.module.css'

import DSC02851 from "../../static/photos/DSC02851.jpg" 
import DSC02905 from "../../static/photos/DSC02905.jpg" 
import DSC03098 from "../../static/photos/DSC03098.jpg" 
import DSC03315 from "../../static/photos/DSC03315.jpg" 
import DSC03455 from "../../static/photos/DSC03455.jpg"
import DSC02881 from "../../static/photos/DSC02881.jpg" 
import DSC03047 from "../../static/photos/DSC03047.jpg" 
import DSC03103 from "../../static/photos/DSC03103.jpg" 
import DSC03386 from "../../static/photos/DSC03386.jpg" 
import DSC03531 from "../../static/photos/DSC03531.jpg"

const Images = [
DSC02851,
DSC02905,
DSC03098,
DSC03315,
DSC03386,
DSC03455,
DSC02881,
DSC03047,
DSC03531,
DSC03103,
]

const PhotographyPage = () => {
    return (
    <Layout>
        <>
            <h1>PHOTOGRAPHY</h1>
            <div className={imageGroup}>
                {Images.map((item, index) => (<div><img src={item} alt={item}/></div>))}
            </div>
        </>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>Kimathi | Photography</title>

export default PhotographyPage
