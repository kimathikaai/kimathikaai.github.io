import * as React from 'react'
import Layout from "../components/Layout";

const AboutPage = () => {
    return (
    <Layout>
        <div>
            <h1>About Me</h1>
            <p>Information about me. This should be the home page</p>
        </div>
    </Layout>
    )
}

// Page metadata for gatsby for SEO
export const Head = () => <title>About Me</title>

export default AboutPage
