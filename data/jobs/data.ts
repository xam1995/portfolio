import {Job} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

export const JOBS: Job[] = [
    {
        title: "FULL-STACK DEVELOPER",
        startDate: "Jul 2023",
        endDate: "Present",
        employer: "KUEHNE + NAGEL | AIR LOGISTICS",
        bulletPoints: ["designed and implemented new features for pharmaceutical shipments, reducing annual demurrage expenses by several million euros", "collaborated with UI/UX designers to revamp and simplify screens to reduce processing times", "improved project-wide code quality by enhancing code generation algorithms by 15%, eliminating generated code smells in classes and interfaces"],
        technologies: [TECHNOLOGIES[0], TECHNOLOGIES[2], TECHNOLOGIES[4], TECHNOLOGIES[5], TECHNOLOGIES[21], TECHNOLOGIES[14], TECHNOLOGIES[10], TECHNOLOGIES[9], TECHNOLOGIES[8]],
    },
    {
        title: "FRONTEND DEVELOPER ",
        startDate: "Nov 2021",
        endDate: "Nov 2022",
        employer: "BIZ | MUSIC STARTUP @ KTH INNOVATION",
        bulletPoints: ["designed and built a user-friendly prototype of a mobile app for musicians and orchestras", "web scraped contact information of potential customers to speed up process by 60%", "conducted user interviews for usability and customer interviews for feature requirement engineering"],
        technologies: [TECHNOLOGIES[7], TECHNOLOGIES[1], TECHNOLOGIES[4], TECHNOLOGIES[6], TECHNOLOGIES[3], TECHNOLOGIES[15]]
    },
    {
        title: "UNIVERSITY ADMINISTRATOR",
        startDate: "May 2019",
        endDate: "Aug 2020",
        employer: "FREE UNIVERSITY BERLIN | ERASMUS+",
        bulletPoints: ["led initiative to optimize internal workflows with automation, prediction algorithm and digitalization by up to 85% in\n" +
        "efficiency", "redesigned wiki to provide a better student experience and reduce internal workload by 30%", "tracked and improved 1800 students’ experiences through data analysis"],
        technologies: [TECHNOLOGIES[1], TECHNOLOGIES[3], TECHNOLOGIES[15], TECHNOLOGIES[22], TECHNOLOGIES[23]]
    },
    {
        title: "JUNIOR RESEARCHER",
        startDate: "May 2017",
        endDate: "Apr 2018",
        employer: "AUDIO-VISUAL RHETORICS OF AFFECT “CINEPOETICS”",
        bulletPoints: ["digital humanities research project on the paradigm shift in the world of finance after 2008", "performed data cleaning, validation, error testing, developed data visualization strategies", "delivered quality assurance of self-developed video-analysis software, while maintaining several databases"],
        technologies: [TECHNOLOGIES[1], TECHNOLOGIES[3], TECHNOLOGIES[4]]
    }
]