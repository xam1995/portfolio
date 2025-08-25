import {Grid, IconButton, Typography} from "@mui/material";
import {PlayArrowOutlined} from "@mui/icons-material";

type Props = {
    videoLink: string | undefined
};

export default function DemoButton(props: Props) {
    const {videoLink} = props;

    if (!videoLink) return null;

    return (
        <a href={videoLink} target="_blank">
            <Grid container direction="row" alignItems="center">
                <IconButton sx={{color: "rgb(54,153,255)"}}>
                    <PlayArrowOutlined fontSize="small"/>
                </IconButton>
                <Typography sx={{color: "rgb(54,153,255)"}} variant="body2">Demo</Typography>
            </Grid>
        </a>
    );
}