import {Grid, IconButton, Typography} from "@mui/material";
import {GitHub} from "@mui/icons-material";

type Props = {
    repoLink: string | undefined;
};
export default function GitHubButton(props: Props) {
    const {repoLink} = props;

    if (!repoLink) return null;

    return (
        <Grid container direction="row" alignItems="center">
            <IconButton
                sx={{color: "rgb(188,188,188)"}}
                component="a"
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub repository"
            >
                <GitHub fontSize="small"/>
            </IconButton>
            <Typography sx={{color: "rgb(188,188,188)"}} variant="body2">GitHub</Typography>
        </Grid>
    );
}