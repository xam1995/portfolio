import {Certification} from "@/data/model/types";
import {Stack} from "@mui/system";
import {Grid, Typography, useMediaQuery} from "@mui/material";

type Props = {
    certifications: Certification[]
}
export default function CertificationSection(props: Props) {
    const {certifications} = props;
    const alignments: string[] = ["start", "center", "end"];
    const isBigScreen = useMediaQuery("(min-width: 768px)");

    return (
        <Stack spacing={2} direction={isBigScreen? "row" : "column"} sx={{justifyContent: 'space-between'}}>
            {certifications.map((certification, index) => (
                <Grid container direction="column" key={certification.title} alignItems={isBigScreen ? alignments[index] : "center"}>
                    <Typography variant="subtitle1">{certification.title}</Typography>
                    <Typography variant="body1">{certification.organization}, {certification.time}</Typography>
                </Grid>
            ))}
        </Stack>);
}