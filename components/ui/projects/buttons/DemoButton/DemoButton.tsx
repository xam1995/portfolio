import {Grid, IconButton, Typography} from "@mui/material";
import {PlayArrowOutlined} from "@mui/icons-material";
import styles from "./DemoButton.module.css";

type Props = {
    videoLink: string | undefined
};

export default function DemoButton(props: Props) {
    const {videoLink} = props;

    if (!videoLink) return null;

    return (
        <Grid container direction="row" alignItems="center">
            <IconButton
                className={styles.button}
                component="a" href={videoLink}
                target="_blank" rel="noopener noreferrer"
                aria-label="Open YouTube Link"
            >
                <PlayArrowOutlined fontSize="small"/>
            </IconButton>
            <Typography className={styles.text} variant="body2">Demo</Typography>
        </Grid>
    );
}