import React from "react";
import Layout from "../components/Layout";
import {
    content,
    date
} from '../styles/experience.module.css'
import * as ms from '../styles/experience.module.css'

const AcademicData = [
    {
        job_title: "Graduate Researcher ",
        company: "UWaterloo, Apple, Nissan",
        country: "Canada",
        start_year: 'Current',
        end_year: 'Current',
        start_month: 0,
        end_month: 0,
        description: "My ongoing research, which spans both my MASc graduate studies and industry partnerships with Nissan and Apple, touches on two main factors impeding the adoption of emerging AI-based imaging solutions: (1) providing per-pixel annotations for imaging tasks is very expensive and labour-intensive; (2) satisfying small margins of error often requires designing highly specialized models that are brittle to small variations in input data (i.e., domain shifts)."
    },
    {
        job_title: "Teaching Assistant",
        company: "University of Waterloo",
        country: "Canada",
        start_year: 2023,
        end_year: 2023,
        start_month: 5,
        end_month: 8,
        description: "MSCI 436 Decision Support Systems. This course provides an introduction to the design and implementation of AI-based decision support systems for engineering and business applications. My responsibilities included tutoring, consultations with students, marking and creating examinations and assignments."
    },
    {
        job_title: "Undergraduate Research Assistant",
        company: "University of Waterloo",
        country: "Canada",
        start_year: 2022,
        end_year: 2022,
        start_month: 1,
        end_month: 4,
        description: "Worked under UWaterloo's Vision and Image Processing (VIP) Lab focusing on egocentric 3D human pose estimation research. This culminated in co-authoring 1) a CVPR 2022 workshop conference paper and 2) a KDD 2023 conference publication. My efforts consisted of: reviewing and presenting background research on papers; collaborating with team members to generate novel ideas in weekly brainstorming sessions; implementing validation and evaluation modules for the PyTorch-based model prototypes."
    },
]

const WorkData = [
    {
        job_title: "Deep Learning Developer",
        company: "Applied Brain Research",
        country: "Canada",
        start_year: 2021,
        end_year: 2021,
        start_month: 5,
        end_month: 8,
        // description: "Prototyped recurrent neural network architectures for wearable and computer vision applications. Primary focus was on human activity recognition from human electrocardiogram signals."
        description: "Developed and optimized recurrent neural networks for wearable and computer vision applications, improving activity recognition accuracy by ~2% using ECG signals."
    },
    {
        job_title: "Software Engineer",
        company: "Cepton Technologies",
        country: "Canada",
        start_year: 2020,
        end_year: 2021,
        start_month: 6,
        end_month: 4,
        // description: "Identified and implemented point-cloud surface feature descriptors for LiDAR-based human/vehicle recognition with C++11, PCL and OpenCV. Prototyped SVMs and Neural Networks to improve the precision and recall of the Helius Smart Lidar. Researched and prototyped LiDAR-based ego-motion vehicle estimation models on the Automotive Perception Team."
        description: "Optimized 3D point-cloud surface descriptors for LiDAR-based object recognition, achieving a ~19% boost in computational efficiency and a ~5% increase in vehicle detection accuracy. Developed a multimodal camera-LiDAR network integrating CNNs (UNet, DeepLabV3) for 3D point-cloud object recognition, reducing manual data annotation costs by >90%."
    },
    {
        job_title: "Hardware Designer",
        company: "Evertz Microsystems",
        country: "Canada",
        start_year: 2019,
        end_year: 2019,
        start_month: 9,
        end_month: 12,
        // description: "Developed multi-channel J2K encoding/decoding products for Amazon and ESPNs streaming services using C/C++. Developed data corruption detection modules for video and audio ST2110-20/30 IP packets in python. Collaborated with product specialists to perform endto-end integration tests for the 570J2K-HW-X19 encoder."
        description: "Developed and debugged FPGA-based audiovisual broadcasting systems for Amazon and ESPN streaming services, leveraging C/C++ for high-performance functionality. Wrote data corruption detection modules for video IP packets with Python, reducing transmission error rates by 15%. Collaborated with product specialists to perform endto-end integration tests for the 570J2K-HW-X19 encoder."
    },
    {
        job_title: "Software Developer",
        company: "Vena Solutions",
        country: "Canada",
        start_year: 2019,
        end_year: 2019,
        start_month: 1,
        end_month: 4,
        // description: "Developed navigation wizards to integrate Vena’s FP&A platform with external data sources using React and Redux. Debugged the Java 8 back-end to diagnose issues with MongoDB and SQL Server transactions. Composed technical documentation for the research and testing stages of Vena's feature development cycle."
        description: "Built navigation wizards for financial platform integration using React and Redux, improving user onboarding efficiency. Diagnosed backend issues in Java 8 applications, resolving MongoDB and SQL Server transaction bottlenecks. Composed technical documentation for the research and testing stages of Vena's feature development cycle."
    },
    {
        job_title: "DevOps Software Engineer",
        company: "Co-operators Insurance",
        country: "Canada",
        start_year: 2018,
        end_year: 2018,
        start_month: 5,
        end_month: 8,
        description: "Redesigned RESTful APIs purposed with on-boarding insurance brokers; saved +$20k/ year worth of labor fees. Automated application build and deployments with Jenkins to improve production process efficiency. Developed and deployed RESTful APIs on Azure and AWS cloud services."
    },

]

const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

const ExperiencePage = () => {
    return (
    <Layout>
        <>
            <h1>EXPERIENCE</h1>
            <h2>ACADEMIC</h2>
                {
                    AcademicData.map((item, index) => (
                    <div className={ms.card}>
                        <div className={ms.date}>
                            <p>{months[item.start_month]}</p>
                            <p>{item.start_year}</p>
                        </div>
                        <div className={content}>
                            <h3>{item.job_title}</h3><span>{item.company}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ))
                }
            <h2>INTERNSHIPS</h2>
                {
                    WorkData.map((item, index) => (
                    <div className={ms.card}>
                        <div className={ms.date}>
                            <p>{months[item.start_month]}</p>
                            <p>{item.start_year}</p>
                        </div>
                        <div className={content}>
                            <h3>{item.job_title}</h3><span>{item.company}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    ))
                }
        </>
    </Layout>
    )
}

export const Head = () => <title>Kimathi | Experience</title>

export default ExperiencePage
