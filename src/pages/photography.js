import * as React from 'react'
import Layout from "../components/Layout";

const PhotographyPage = () => {
    return (
    <Layout>
        <>
            <h1>PHOTOGRAPHY</h1>
            <p>Post photography projects</p>
        </>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>Photography Page</title>

export default PhotographyPage
