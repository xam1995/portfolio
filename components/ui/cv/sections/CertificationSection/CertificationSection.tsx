import {Certification} from "@/data/model/types";
import {Stack} from "@mui/system";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import styles from "./CertifcationSection.module.css";
import {Icon} from "@iconify/react";

type Props = {
    certifications: Certification[]
}

export default function CertificationSection(props: Props) {
    const {certifications} = props;
    const alignments: string[] = ["start", "center", "end"];
    const isBigScreen = useMediaQuery("(min-width: 768px)");

    return (
        <Stack spacing={2} direction={isBigScreen ? "row" : "column"} className={styles.stack}>
            {certifications.map((certification, index) => (
                <Grid key={index} container direction="column" alignItems="center" spacing={2}>
                    <a href={certification.link} target="_blank">
                        <Icon icon={"lucide:badge-check"} className={styles.icon}/>
                    </a>
                    <Grid container direction="column" key={certification.title} spacing={0}
                          alignItems={isBigScreen ? alignments[index] : "center"}>
                        <Typography variant="subtitle1">{certification.title}</Typography>
                        <Typography variant="body1">{certification.organization}, {certification.time}</Typography>
                    </Grid>
                </Grid>
            ))}
        </Stack>);
}