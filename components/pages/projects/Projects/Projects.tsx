"use client"

import {Project} from "@/data/model/types";
import {getProjects} from "@/services/projects/service";
import {Container, Grid} from "@mui/material";
import ProjectCard from "@/components/ui/projects/ProjectCard/ProjectCard";
import SectionHeader from "@/components/ui/headers/SectionHeader/SectionHeader";
import styles from "./Projects.module.css";

export default function Projects() {
    const projects = getProjects();

    return (
        <Container className={styles.container} maxWidth="md" id="projects">
            <SectionHeader icon="lucide:code-xml" label="Projects" />
            <Grid container flex={1} spacing={2}>
                {projects.map((project: Project) => (
                    <ProjectCard key={project.title} project={project}/>))}
            </Grid>
        </Container>
    );
}