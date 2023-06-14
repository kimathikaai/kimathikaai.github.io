import * as React from 'react'
import Layout from "../components/Layout";

const PhotographyPage = () => {
    return (
    <Layout>
        <div>
            <h1>Photography Page</h1>
            <p>Post photography projects</p>
        </div>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>Photography Page</title>

export default PhotographyPage
