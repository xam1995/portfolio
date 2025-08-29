import {Grid, IconButton, Typography} from "@mui/material";
import {ArticleOutlined} from "@mui/icons-material";

type Props = {
    articleLink: string | undefined;
};

export default function ArticleButton(props: Props) {
    const {articleLink} = props;

    if (!articleLink) return null;

    return (
        <Grid container direction="row" alignItems="center">
            <IconButton
                sx={{color: "rgb(188,188,188)"}}
                component="a"
                href={articleLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Article"
            >
                <ArticleOutlined fontSize="small"/>
            </IconButton>
            <Typography sx={{color: "rgb(188,188,188)"}} variant="body2">Read</Typography>
        </Grid>
    );
}