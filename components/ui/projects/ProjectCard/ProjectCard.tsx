"use client"

import {CardActions, CardContent, Grid, Paper, Typography} from "@mui/material";
import {Project, Technology} from "@/data/model/types";
import DemoButton from "@/components/ui/projects/buttons/DemoButton/DemoButton";
import GitHubButton from "@/components/ui/projects/buttons/GitHubButton/GitHubButton";
import ArticleButton from "@/components/ui/projects/buttons/ArticleButton/ArticleButton";
import styles from "./ProjectCard.module.css";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import Link from "next/link";
import Image from "next/image";

type Props = {
    project: Project;
};

export default function ProjectCard(props: Props) {
    const project: Project = props.project;
    const technologies: Technology[] | undefined = project.technologies?.slice(0, 3);

    return (
        <Paper className={styles.paper}>
            <Link href={`projects\\${props.project.slug}`}>
                <Image src={project.image}
                       alt={project.slug + "-pic"}
                       className={styles.image}
                       width={300}
                       height={150}
                />
                <Grid container justifyContent={"space-between"}>
                    <Typography variant="h6" className={styles.header}
                                fontWeight="bold">{project.title}</Typography>
                    <Grid container spacing={0.25} alignItems={"center"} paddingX={1}>
                        {technologies && technologies.map(tech =>
                            <TechCard key={`${project.slug}-${tech.name}-pc`} technology={tech} isSmall={true}/>)}
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