import React from "react";
import Layout from "../components/Layout";
import {
    researchCard,
    content,
    media,
    myName,
} from '../styles/research.module.css'
import * as ms from '../styles/research.module.css'
import pacs from '../../static/pacs_data.png'
import egostan from '../../static/egostan_skeleton.png'
import egostan_fmt from '../../static/egostan_fmt.png'

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

const PaperLink = ({url, string}) => {
    return (
    <a target="_blank" rel="noopener" href={url}>{string}</a>
    )
}

const ResearchPage = () => {
    return (
    <Layout>
        <>
            <h1>RESEARCH</h1>
            <h2>PUBLICATIONS</h2>
            <div className={researchCard}>
                <div className={media}>
                    <img src={egostan} />
                </div>
                <div className={content}>
                    <h3><a target="_blank" rel="noopener" href="https://doi.org/10.1145/3580305.3599312">Domain-Guided Spatio-Temporal Self-Attention for Egocentric 3D Pose Estimation</a></h3>
                    <p>J Park, <span className={myName}>Kaai K,</span> S Hossain, N Sumi, S Rambhatla, P Fieguth</p>
                    <p>Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2023. <PaperLink url="https://doi.org/10.1145/3580305.3599312" string="ACM"/></p>
                    <p><span className={ms.highlight}>*Oral and poster presentation</span></p>
                </div>
            </div>
            <h2>UNDER REVIEW</h2>
            <div>
                <div className={researchCard}>
                    <div className={media}>
                        <img src={pacs} />
                    </div>
                    <div className={content}>
                    <h3><a target="_blank" rel="noopener" href="https://arxiv.org/abs/2306.00879">Domain Generalization for Domain-Linked Classes</a></h3>
                        <p><span className={myName}>Kaai K,</span> S Hossain, S Rambhatla</p>
                        <PaperLink url="https://arxiv.org/abs/2306.00879"string="Arxiv"/>
                    </div>
                </div>
            </div>
            <h2>WORKSHOPS</h2>
            <div className={researchCard}>
                <div className={media}>
                    <img src={egostan_fmt} />
                </div>
                <div className={content}>
                <h3><a target="_blank" rel="noopener" href="https://arxiv.org/abs/2206.04785">Building Spatio-temporal Transformers for Egocentric 3D Pose Estimation</a></h3>
                    <p>J Park, <span className={myName}>Kaai K,</span> S Hossain, N Sumi, S Rambhatla, P Fieguth</p>
                    <p>
                        Joint International Workshop on Egocentric Perception, 
                        Interaction and Computing (EPIC) and Ego4D, IEEE/CVF 
                        Computer Vision and Pattern Recognition Conference (CVPR), 
                        2022. <PaperLink url="https://arxiv.org/abs/2206.04785"string="Arxiv"/>
                    </p>
                </div>
            </div>
        </>
    </Layout>
    )
}

export const Head = () => <title>Kimathi | Research</title>

export default ResearchPage
