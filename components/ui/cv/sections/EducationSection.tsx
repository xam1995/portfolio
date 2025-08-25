"use client"

import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Education} from "@/data/model/types";
import {Circle} from "@mui/icons-material";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";

type Props = {
    ed: Education;
}
export default function EducationSection(props: Props) {
    const {ed} = props;

    return (
        <Box sx={{paddingBottom: 8}}>
            <Grid container spacing={2} sx={{justifyContent: 'space-between', alignItems: 'top'}}>
                <Typography variant="h6">{ed.title}</Typography>
                <Typography variant="body1">{ed.startDate} - {ed.endDate}</Typography>
            </Grid>
            <Typography variant="subtitle2">{ed.organization}</Typography>
            <List>
                {ed.bulletPoints.map((bulletPoint, index) => (
                    <ListItem key={`ed-bp${index}`} sx={{padding: 0}}>
                        <ListItemIcon><Circle color="primary" sx={{fontSize: "0.75rem"}}/></ListItemIcon>
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