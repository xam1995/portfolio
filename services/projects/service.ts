import {Project} from "@/data/model/types";
import {ParamValue} from "next/dist/server/request/params";
import {PROJECTS} from "@/data/projects/data";
import {getImage} from "@/services/images/service";

const PROJECTS_IMAGE_BASE_PATH = "projects";

function appendImagePath(project: Project) {
    if (!project.image.includes("/")) {
        project.image = getImage(PROJECTS_IMAGE_BASE_PATH, project.image);
    }
}

export function getProjects(): Project[] {
    PROJECTS.forEach((project) => appendImagePath(project));
    return PROJECTS;
}

export function getProjectBySlug(slug: ParamValue): Project | null {
    if (!slug) return null;
    const project = PROJECTS.filter((project: Project) => project.slug.toLowerCase() === slug.toString().toLowerCase())[0];
    if (project != null) {
        appendImagePath(project);
    }
    return project;
}
