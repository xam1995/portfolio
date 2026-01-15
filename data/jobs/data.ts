import {Job} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

export const JOBS: Job[] = [
    {
        title: "FULL-STACK ENGINEER",
        startDate: "Jul 2023",
        endDate: "Present",
        employer: "KUEHNE + NAGEL | AIR LOGISTICS",
        bulletPoints: ["designed and implemented business-critical features for temperature-controlled pharmaceutical shipments, reducing annual demurrage expenses by several million euros", "designed and developed compliance-focused features in line with EU and US regulations, reducing risk in ransporting dangerous goods on airplanes and synchronizing customs data for US entry", "collaborated with 5 engineers to design and implement tests following the testing pyramid, increasing code coverage to 90%", "reduced long-term operational risk by enhancing code generation algorithms by 15%, eliminating generated code smells in classes and interfaces"],
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
        title: "JUNIOR DATA ANALYST",
        startDate: "May 2017",
        endDate: "Apr 2018",
        employer: "AUDIO-VISUAL RHETORICS OF AFFECT “CINEPOETICS”",
        bulletPoints: ["digital humanities research project on the paradigm shift in the world of finance after 2008", "performed data cleaning, validation, error testing, developed data visualization strategies", "delivered quality assurance of self-developed video-analysis software, while maintaining several databases"],
        technologies: [TECHNOLOGIES[1], TECHNOLOGIES[3], TECHNOLOGIES[4]]
    }
]