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


