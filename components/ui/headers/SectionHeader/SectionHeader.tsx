import {Grid, Typography} from "@mui/material";
import {Icon} from "@iconify/react";
import styles from "./SectionHeader.module.css";

type Props = {
    icon: string;
    label: string;
}

export default function SectionHeader(props: Props) {
    const {icon, label} = props;

    return (
        <Grid container spacing={2} className={styles.grid}>
            <div className={styles.div}>
                <Icon icon={icon} className={styles.icon}/>
            </div>
            <Typography variant="h4" className={styles.text}>{label}</Typography>
        </Grid>
    );
}