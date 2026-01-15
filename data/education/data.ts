import {Certification, Education} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

export const EDUCATION: Education[] = [
    {
        title: "BOOTCAMP JAVA",
        startDate: "Mar 2023",
        endDate: "Jun 2023",
        organization: "BRIGHTS LEARNING | ACADEMIC WORK",
        bulletPoints: ["coordinated independent/graduation projects “GrumpGPT” and “GhostBnBoo” by outlining features, drafting initial designs and distributing work packages", "conducted free-standing teaching unit on Java Streams API, preparing classmates for their first exam", "syllabus: Java basics & advanced, OOP, TDD, scrum, security & frontend frameworks, REST APIs, CI/CD"],
        technologies: [TECHNOLOGIES[0], TECHNOLOGIES[2], TECHNOLOGIES[4], TECHNOLOGIES[5]],
    },
    {
        title: "MACHINE LEARNING PROJECT",
        startDate: "Nov 2020",
        endDate: "May 2021",
        organization: "STOCKHOLM UNIVERSITY",
        bulletPoints: ["developed an AI-enabled process to analyze how cars were depicted in Swedish films and TV (1950–1980) using object detection, speech-to-text and natural language processing methods", "built an interactive visualization tool that let users explore film footage patterns across decades based on object detection, thereby letting them explore data more intuitively", "used generative AI to create 'the automobiles of the decade' with generative adversarial network approach"],
        technologies: [TECHNOLOGIES[3], TECHNOLOGIES[22], TECHNOLOGIES[23]],
    }
]

export const CERTIFICATIONS: Certification[] = [
    {
        title: "MACHINE LEARNING",
        organization: "DeepLearning.AI",
        time: "2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/8UE6RWTN93RX"
    },
    {
        title: "DATA ANALYST",
        organization: "Google",
        time: "2022",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/NC5QUNY3L6JV"
    },
    {
        title: "CYBERSECURITY",
        organization: "Google",
        time: "2024",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/CY9NUESZ6E8V"
    },
]

export const DEGREES: Certification[] = [
    {title: "M.A. CINEMA STUDIES", organization: "Stockholm University", time: "2020-2021"},
    {title: "B.A. FILM STUDIES", organization: "Free University Berlin", time: "2015-2020"},
]
