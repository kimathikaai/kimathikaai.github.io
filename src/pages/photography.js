import * as React from 'react'
import Layout from "../components/Layout";
import {
    imageGroup
} from '../styles/photography.module.css'

import back_door from '../../static/back_door.jpg'
import store_window from '../../static/store_window.jpg'
import perimeter_window from '../../static/perimeter_window.jpg'
import garage_vines from '../../static/garage_vines.jpg'

const Images = [garage_vines, back_door, store_window, perimeter_window]

const PhotographyPage = () => {
    return (
    <Layout>
        <>
            <h1>PHOTOGRAPHY</h1>
            <div className={imageGroup}>
                {Images.map((item, index) => (<div><img src={item}/></div>))}
            </div>
        </>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>Kimathi | Photography</title>

export default PhotographyPage
