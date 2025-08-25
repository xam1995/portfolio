"use client"

import {CardActions, CardContent, Grid, Paper, Typography} from "@mui/material";
import {Project} from "@/data/model/types";
import DemoButton from "@/components/ui/projects/buttons/DemoButton";
import GitHubButton from "@/components/ui/projects/buttons/GitHubButton";
import ArticleButton from "@/components/ui/projects/buttons/ArticleButton";
import styles from "./ProjectCard.module.css";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import Link from "next/link";

type Props = {
    project: Project;
};

export default function ProjectCard(props: Props) {
    const project: Project = props.project;

    return (
        <Paper className={styles.paper}>
            <Link  href={`projects\\${props.project.slug}`}>
                <img src={project.images?.[0]} alt={project.slug + "-pic"}
                     className={styles.image}/>
                <Grid container justifyContent={"space-between"}>
                    <Typography variant="h6" sx={{paddingX: 2}}
                                fontWeight="bold">{project.title}</Typography>
                    <Grid container spacing={0.25} alignItems={"center"} paddingX={1}>
                        {project.technologies?.slice(0, 3).map(tech => <TechCard key={`${project.slug}-${tech.name}`}
                                                                                 technology={tech} isSmall={true}/>)}
                    </Grid>
                </Grid>
            </Link>
            <CardContent className={styles.text}>
                {project.subtitle}
            </CardContent>
            <CardActions>
                <DemoButton videoLink={project.videoLink}/>
                <GitHubButton repoLink={project.repoLink}/>
                <ArticleButton articleLink={project.articleLink}/>
            </CardActions>
        </Paper>
    );
}