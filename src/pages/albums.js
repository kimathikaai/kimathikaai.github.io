import * as React from 'react'
import Layout from "../components/Layout";
import * as ms from '../styles/albums.module.css'
import { useState } from "react"

import hi from '../../static/photos/after-hours/0.jpg';

// https://dev.to/rose/tutorial-a-gatsby-photo-blog-powered-by-flickr-40g0

const albumData = [
    {
        title: "night-frame",
        description: "The night is a beautifule frame",
        images: [0,1,2,3,4,5]

    },
    {
        title: "after-hours",
        description: "The night gives meaning to the light behind windows",
        images: [0,1,2,3]
    },
];

const TabButtons = ({albumData, activeTab, setActiveTab}) => {
    return (
        <div className={ms.tabHeader} >
            <nav>
                {albumData.map((item, index) => (
                    <div className={`${activeTab == index ? ms.active : ''}`}
                        key={item.title}
                        onClick={() => setActiveTab(index)}
                    >
                        {item.title}
                    </div>
                ))}
            </nav>
        </div>

    )
}


const TabContent = ({albumData, activeTab}) => {
    return (
        <div>
            <div className={ms.imageGroup}>
                {albumData[activeTab].images.map((img, index) => (
                    <div>
                        <img 
                            src={'/photos/'+ albumData[activeTab].title + '/'+img+'.jpg'} 
                            alt='' 
                            key={index}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

// Creating tabs for photography
// https://blog.logrocket.com/how-to-build-tab-component-react/
// Including performance specs
// https://www.freecodecamp.org/news/build-a-high-performance-tab-component/#the-heart-of-the-tab-component

const AlbumPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
    <Layout>
        <>
            <div className={ms.albumContainer}>
                <TabButtons 
                    albumData={albumData}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <TabContent albumData={albumData} activeTab={activeTab}/>
            </div>
        </>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>Kimathi | Album</title>

export default AlbumPage
