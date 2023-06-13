import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
    return (
        <Layout>
            <div>
                <h1>Kimathi Kaai</h1>
                <p>MASc student at UWaterloo</p>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
