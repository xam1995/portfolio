import Link from "next/link";
import {Container, Grid, Typography} from "@mui/material";
import SectionHeader from "@/components/ui/headers/SectionHeader";

export default function NotFound() {
    return (
        <Container maxWidth="md" sx={{paddingY: 3}}>
            <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">

                <Typography variant="h1">#404</Typography>
                <Typography variant="body1">Looks like you landed on the moon...by accident.</Typography>
                <Link href="/"><SectionHeader icon={"lucide:rocket"} label={"Go home"} /></Link>
            </Grid>
        </Container>
    );
}