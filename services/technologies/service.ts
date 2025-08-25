import {Technology} from "@/data/model/types";
import {TECHNOLOGIES} from "@/data/technologies/data";

function sort(technologies: Technology[]) {
    return technologies.sort((a, b) => a.name.localeCompare(b.name));
}

export function getTechnologies(): Technology[] {
    return sort(TECHNOLOGIES);
}

export function getTechnology(name: string): Technology {
    return TECHNOLOGIES.filter((tech: Technology) => tech.name.toLowerCase().includes(name.toLowerCase()))[0];
}


export function getLanguages(): Technology[] {
    return TECHNOLOGIES.filter((tech: Technology) => tech.isLanguage);
}


export function getFrameworks(): Technology[] {
    return TECHNOLOGIES.filter((tech: Technology) => tech.isFramework);
}


export function getTools(): Technology[] {
    return TECHNOLOGIES.filter((tech: Technology) => tech.isTool);
}


export function getLibraries(): Technology[] {
    return TECHNOLOGIES.filter((tech: Technology) => tech.isLibrary);
}


