import React from "react";
import Layout from "../components/Layout";

const PublicationData = [
    {    
        title: "Domain-Guided Spatio-Temporal Self-Attention for Egocentric 3D Pose Estimation",
        conference: "Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        authors: "Jinman P., Kimathi K. Saad H., Norikatsu S., Sirisha R., Paul F.",
        link: "https://doi.org/10.1145/3580305.3599312",
        year: 2023,
        series: "KDD"
    },
    {    
        title: "Domain Generalization for Domain-Linked Classes",
        conference: "arxiv preprint",
        authors: "Kimathi K. Saad H., Sirisha R.",
        year: 2023,
        link: "https://arxiv.org/abs/2306.00879"
    }

]

const ResearchPage = () => {
    return (
    <Layout>
        <>
            <h1>RESEARCH</h1>
            <p>Insert publications and pre-prints</p>
        </>
    </Layout>
    )
}

export const Head = () => <title>Research</title>

export default ResearchPage
