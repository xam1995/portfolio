import {Certification, Education} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

export const EDUCATION: Education[] = [
    {
        title: "BRIGHTS JAVA BOOTCAMP",
        startDate: "Mar 2023",
        endDate: "Jun 2023",
        organization: "BRIGHTS LEARNING | ACADEMIC WORK",
        bulletPoints: ["coordinated independent/graduation projects “GrumpGPT” and “GhostBnBoo” by outlining features, drafting initial\n" +
        "designs and distributing work packages", "conducted free-standing teaching unit on Java Streams API, preparing classmates for their first exam", "syllabus: Java basics & advanced, OOP, TDD, scrum, security & frontend frameworks, REST APIs, CI/CD"],
        technologies: [TECHNOLOGIES[0], TECHNOLOGIES[1], TECHNOLOGIES[2], TECHNOLOGIES[4], TECHNOLOGIES[5]],
    },
    {
        title: "M.A. THESIS PROJECT",
        startDate: "Nov 2020",
        endDate: "May 2021",
        organization: "STOCKHOLM UNIVERSITY",
        bulletPoints: ["led independent project with ML-based object detection of 120 films, data cleaning, data validation, statistical\n" +
        "analysis, data visualization web scraped online film archives, including automated video conversion upon\n" +
        "download to improve efficiency by 81%"],
        technologies: [TECHNOLOGIES[3], TECHNOLOGIES[22], TECHNOLOGIES[23]],
    }
]

export const CERTIFICATIONS: Certification[] = [
    {title: "MACHINE LEARNING", organization: "DeepLearning.AI", time: "2024"},
    {title: "DATA ANALYST", organization: "Google", time: "2022"},
    {title: "CYBERSECURITY", organization: "Google", time: "2024"},
]

export const DEGREES: Certification[] = [
    {title: "M.A. CINEMA STUDIES", organization: "Stockholm University", time: "2020-2021"},
    {title: "B.A. FILM STUDIES", organization: "Free University Berlin", time: "2015-2020"},
]
