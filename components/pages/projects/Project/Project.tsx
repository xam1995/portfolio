"use client";


import {Project} from "@/data/model/types";
import {Container, Grid, Stack} from "@mui/system";
import {redirect} from "next/navigation";
import {Typography} from "@mui/material";
import DemoButton from "@/components/ui/projects/buttons/DemoButton/DemoButton";
import GitHubButton from "@/components/ui/projects/buttons/GitHubButton/GitHubButton";
import ArticleButton from "@/components/ui/projects/buttons/ArticleButton/ArticleButton";
import ProjectHeader from "@/components/ui/headers/ProjectHeader/ProjectHeader";
import styles from "./Project.module.css";

type Props = {
    project: Project;
}
export default function ProjectPageClient(props: Props) {
    const {project} = props;

    if (!project) redirect("/");

    return (
        <Container className={styles.container}>
            <Grid container spacing={2} direction="column">
                <ProjectHeader project={project}/>
                <Typography flex={1} variant="subtitle1" textAlign="justify">{project.summary}</Typography>
                <Stack direction="row" spacing={2}>
                    <DemoButton videoLink={project.videoLink}/>
                    <GitHubButton repoLink={project.repoLink}/>
                    <ArticleButton articleLink={project.articleLink}/>
                </Stack>
            </Grid>
        </Container>
    );
}