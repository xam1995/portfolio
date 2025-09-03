"use client"

import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Circle} from "@mui/icons-material";
import {Job} from "@/data/model/types";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import styles from "./JobSection.module.css";

type Props = {
    job: Job;
}

export default function JobSection(props: Props) {
    const job = props.job;

    return (
        <Box key={job.title} className={styles.box}>
            <Grid container spacing={2} className={styles.grid}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body1" className={styles.duration}>{job.startDate} - {job.endDate}</Typography>
            </Grid>
            <Typography variant="subtitle2">{job.employer}</Typography>
            <List>
                {job.bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={`${job.title}-bp${index}`} className={styles.item}>
                        <ListItemIcon>
                            <Circle className={styles.circle}/>
                        </ListItemIcon>
                        <ListItemText>{bulletPoint}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={1} justifyContent="center">
                {job.technologies?.map(tech => <TechCard key={`${job.title}-${tech.name}`} technology={tech}/>)}
            </Grid>
        </Box>
    );
}