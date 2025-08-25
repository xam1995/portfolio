"use client";


import {Project, Technology} from "@/data/model/types";
import {Container, Grid, Stack} from "@mui/system";
import {redirect} from "next/navigation";
import {Typography} from "@mui/material";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import DemoButton from "@/components/ui/projects/buttons/DemoButton";
import GitHubButton from "@/components/ui/projects/buttons/GitHubButton";
import ArticleButton from "@/components/ui/projects/buttons/ArticleButton";

type Props = {
    project: Project;
}
export default function ProjectPageClient(props: Props) {
    const {project} = props;

    if (!project) {
        redirect("/")
    }

    return (
        <Container sx={{paddingY: 5, minHeight: "90vh"}}>
            <Grid container spacing={2} direction="column">
                <Typography variant="h3">{project.title}</Typography>
                {project.images && (
                    <Grid container spacing={2} paddingY={2} style={{display: "flex"}}>
                        <img src={`../${project.images[0]}`} alt={`${project.slug}1`}
                             style={{flex: 1, display: "flex", maxWidth: "100%", maxHeight: 300, objectFit: "cover"}}/>
                    </Grid>)}
                <Grid container spacing={2}>
                    {project.technologies?.map((technology: Technology) => (
                        <TechCard key={technology.name} technology={technology}/>))}
                </Grid>
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