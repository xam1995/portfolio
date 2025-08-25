import {Project, Technology} from "@/data/model/types";
import {ParamValue} from "next/dist/server/request/params";
import {PROJECTS} from "@/data/projects/data";


export function getProjects(): Project[] {
    return PROJECTS;
}

export function getProject(name: string) {
    return PROJECTS.filter((project: Project) => project.title.toLowerCase().includes(name.toLowerCase()))[0];
}

export function getProjectBySlug(slug: ParamValue): Project {
    if (!slug) {
        return {} as Project;
    }
    return PROJECTS.filter((project: Project) => project.slug.toLowerCase().includes(slug.toString().toLowerCase()))[0];
}

export function getProjectByTechnology(name: string) {
    return PROJECTS.filter((project: Project) => {
            return project.technologies != undefined && project.technologies.map((tech: Technology) => tech.name).includes(name)
        }
    );
}
