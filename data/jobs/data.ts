import {Job} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

export const JOBS: Job[] = [
    {
        title: "FULL-STACK DEVELOPER",
        startDate: "Jul 2023",
        endDate: "Present",
        employer: "KUEHNE + NAGEL | AIR LOGISTICS",
        bulletPoints: ["designed and implemented new features for temperature-controlled pharmaceutical shipments, reducing annual\n" +
        "demurrage expenses by several million euros", "designed and developed critical features in compliance with EU and US regulations, reducing risk in transporting\n" +
        "dangerous goods on airplanes and synchronizing customs data for US entry", "collaborated with 5 engineers to design and implement tests following the testing pyramid, increasing code\n" +
        "coverage to 90%", "improved project-wide code quality by enhancing code generation algorithms by 15%, eliminating generated code\n" +
        "smells in classes and interfaces"],
        technologies: [TECHNOLOGIES[0], TECHNOLOGIES[2], TECHNOLOGIES[1], TECHNOLOGIES[4], TECHNOLOGIES[5], TECHNOLOGIES[25], TECHNOLOGIES[21], TECHNOLOGIES[19], TECHNOLOGIES[18], TECHNOLOGIES[17], TECHNOLOGIES[16], TECHNOLOGIES[14], TECHNOLOGIES[11], TECHNOLOGIES[10], TECHNOLOGIES[9], TECHNOLOGIES[8]],
    },
    {
        title: "FRONTEND DEVELOPER ",
        startDate: "Nov 2021",
        endDate: "Nov 2022",
        employer: "BIZ | MUSIC STARTUP @ KTH INNOVATION",
        bulletPoints: ["drafted up initial UI/UX design for prototype in collaboration with founder and potential customers", "developed proof of concept mobile application for a listing platform aimed at musicians and orchestras, thereby\n" +
        "enabling continued participation in the program and attracting funding", "web scraped contact information of potential customers to speed up process by 60%"],
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