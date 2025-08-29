import {Project} from "@/data/model/types";
import {ParamValue} from "next/dist/server/request/params";
import {PROJECTS} from "@/data/projects/data";


export function getProjects(): Project[] {
    return PROJECTS;
}

export function getProjectBySlug(slug: ParamValue): Project | null {
    if (!slug) return null;
    return PROJECTS.filter((project: Project) => project.slug.toLowerCase() === slug.toString().toLowerCase())[0];
}
