"use client"

import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Education} from "@/data/model/types";
import {Circle} from "@mui/icons-material";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import styles from "./EducationSection.module.css";

type Props = {
    ed: Education;
}

export default function EducationSection(props: Props) {
    const {ed} = props;

    return (
        <Box className={styles.box}>
            <Grid container spacing={2} className={styles.grid}>
                <Typography variant="h6">{ed.title}</Typography>
                <Typography variant="body1">{ed.startDate} - {ed.endDate}</Typography>
            </Grid>
            <Typography variant="subtitle2">{ed.organization}</Typography>
            <List>
                {ed.bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={`ed-bp${index}`} className={styles.item}>
                        <ListItemIcon><Circle className={styles.circle}/></ListItemIcon>
                        <ListItemText>{bulletPoint}</ListItemText>
                    </ListItem>
                ))}
            </List>
            <Grid container spacing={1} justifyContent="center">
                {ed.technologies?.map(tech => <TechCard key={`${ed.title}-${tech.name}`} technology={tech}/>)}
            </Grid>
        </Box>
    );
}