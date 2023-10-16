import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
    return (
        <Layout>
            <>
                <h1>KIMATHI KAAI</h1>
                <p>
                    I conducting research as a MASc Systems Design 
                    Engineering student at the University of Waterloo. I primarily 
                    focus on improving the "seeing" ability of machine-learning 
                    systems when they encounter completely new data environments. 
                    I conduct my research as part of the <a href="https://uwaterloo.ca/vision-image-processing-lab/" target="_blank" rel="noopener">VIP</a> and <a href="https://sirisharambhatla.com/criticalml/" target="_blank" rel="noopener">Critical ML</a> labs at the university. 
                </p>
                <p>
                    As I build this site I'll be posting publications, photography and more.
                </p>
            </>
        <footer>
            &copy; Copyright 2023 Kimathi Kaai
        </footer>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
