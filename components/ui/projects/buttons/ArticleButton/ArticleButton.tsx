import {Grid, IconButton, Typography} from "@mui/material";
import {ArticleOutlined} from "@mui/icons-material";
import styles from "./ArticleButton.module.css";

type Props = {
    articleLink: string | undefined;
};

export default function ArticleButton(props: Props) {
    const {articleLink} = props;

    if (!articleLink) return null;

    return (
        <Grid container direction="row" alignItems="center">
            <IconButton
                className={styles.button}
                component="a"
                href={articleLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Article"
            >
                <ArticleOutlined fontSize="small"/>
            </IconButton>
            <Typography className={styles.text} variant="body2">Read</Typography>
        </Grid>
    );
}