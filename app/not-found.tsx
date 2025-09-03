import Link from "next/link";
import Image from "next/image";
import {Grid, Typography, Box} from "@mui/material";
import SectionHeader from "@/components/ui/headers/SectionHeader/SectionHeader";
import styles from "./not-found.module.css";
import {getNotFoundImage} from "@/services/images/service";

export default function NotFound() {
    const notFoundImage = getNotFoundImage();

    return (
        <Box maxWidth="md" className={styles.box}>
            <Grid container spacing={2} className={styles.grid}>
                <Typography variant="h1">#404</Typography>
                <Image src={notFoundImage} width={300} height={300}
                       alt="moon not found image" className={styles.image}/>
                <Typography variant="body1">Looks like you landed on the moon. There&apos;s nothing here...</Typography>
                <Link href="/">
                    <SectionHeader icon={"lucide:rocket"} label={"Go home"}/>
                </Link>
            </Grid>
        </Box>
    );
}