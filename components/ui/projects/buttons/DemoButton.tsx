import {Grid, IconButton, Typography} from "@mui/material";
import {PlayArrowOutlined} from "@mui/icons-material";

type Props = {
    videoLink: string | undefined
};

export default function DemoButton(props: Props) {
    const {videoLink} = props;

    if (!videoLink) return null;

    return (
        <Grid container direction="row" alignItems="center">
            <IconButton
                sx={{color: "rgb(54,153,255)"}}
                component="a" href={videoLink}
                target="_blank" rel="noopener noreferrer"
                aria-label="Open YouTube Link"
            >
                <PlayArrowOutlined fontSize="small"/>
            </IconButton>
            <Typography sx={{color: "rgb(54,153,255)"}} variant="body2">Demo</Typography>
        </Grid>
    );
}