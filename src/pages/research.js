import React from "react";
import Layout from "../components/Layout";
import {
    researchCard,
    content,
    media,
    myName,
} from '../styles/research.module.css'
import pacs from '../../static/pacs_data.png'
import egostan from '../../static/egostan_skeleton.png'

const PublicationData = [
    {    
        title: "Domain-Guided Spatio-Temporal Self-Attention for Egocentric 3D Pose Estimation",
        conference: "Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining",
        authors: "Jinman P., Kimathi K. Saad H., Norikatsu S., Sirisha R., Paul F.",
        link: "https://doi.org/10.1145/3580305.3599312",
        year: 2023,
        series: "KDD",
        img: egostan,
        published: true,
    },
    {    
        title: "Domain Generalization for Domain-Linked Classes",
        conference: "Arxiv Preprint",
        authors: "Kimathi K., Saad H., Sirisha R.",
        year: 2023,
        series: "Arxiv",
        link: "https://arxiv.org/abs/2306.00879",
        img: pacs,
        published: false,
    }

]

const ResearchPage = () => {
    return (
    <Layout>
        <>
            <h1>RESEARCH</h1>
            <div>
                <div className={researchCard}>
                    <div className={media}>
                        <img src={egostan} />
                    </div>
                    <div className={content}>
                        <h3>Domain-Guided Spatio-Temporal Self-Attention for Egocentric 3D Pose Estimation</h3>
                        <p>J Park, <span className={myName}>Kaai K,</span> S Hossain, N Sumi, S Rambhatla, P Fieguth</p>
                        <p>Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD) <a target="_blank" rel="noopener" href="https://doi.org/10.1145/3580305.3599312">2023</a>
                        </p>
                    </div>
                </div>
                <div className={researchCard}>
                    <div className={media}>
                        <img src={pacs} />
                    </div>
                    <div className={content}>
                    <h3>Domain Generalization for Domain-Linked Classes</h3>
                        <p><span className={myName}>Kaai K,</span> S Hossain, S Rambhatla</p>
                        <p>Arxiv Preprint <a target="_blank" rel="noopener" href="https://arxiv.org/abs/2306.00879">2023</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    </Layout>
    )
}

export const Head = () => <title>Research</title>

export default ResearchPage
