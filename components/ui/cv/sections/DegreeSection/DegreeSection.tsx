import {Certification} from "@/data/model/types";
import {Stack} from "@mui/system";
import {Typography, useMediaQuery} from "@mui/material";
import styles from "./DegreeSection.module.css";

type Props = { degrees: Certification[] };

export default function DegreeSection(props: Props) {
    const {degrees} = props;
    const alignments: string[] = ["start", "end"];
    const isBigScreen = useMediaQuery("(min-width: 768px)");

    return (
        <Stack spacing={2} direction={isBigScreen ? "row" : "column"} className={styles.stack}>
            {degrees.map((certification, index) => (
                <Stack key={"certification" + index} sx={{alignItems: isBigScreen ? alignments[index] : "center"}}>
                    <Typography variant="subtitle1">{certification.title}</Typography>
                    <Typography variant="body1">{certification.organization}, {certification.time}</Typography>
                </Stack>
            ))}
        </Stack>
    );
}