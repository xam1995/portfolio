"use client"

import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Circle} from "@mui/icons-material";
import {Job} from "@/data/model/types";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";

type Props = {
    job: Job;
}
export default function JobSection(props: Props) {
    const job = props.job;

    return (
        <Box key={job.title} sx={{paddingBottom: 8}}>
            <Grid container spacing={2} sx={{justifyContent: 'space-between', alignItems: 'top'}}>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="body1" sx={{color: "lightgray"}}>{job.startDate} - {job.endDate}</Typography>
            </Grid>
            <Typography variant="subtitle2">{job.employer}</Typography>
            <List>
                {job.bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={job.title + "-bp" + index} sx={{padding: 0}}>
                        <ListItemIcon>
                            <Circle color="primary" sx={{fontSize: "0.75rem"}}/>
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