import {Certification} from "@/data/model/types";
import {Stack} from "@mui/system";
import {Typography, useMediaQuery} from "@mui/material";

type Props = { degrees: Certification[] };

export default function DegreeSection(props: Props) {
    const {degrees} = props;
    const alignments: string[] = ["start", "end"];
    const isBigScreen = useMediaQuery("(min-width: 768px)");

    return (
        <Stack spacing={2} direction={isBigScreen ? "row" : "column"} sx={{justifyContent: 'space-between', paddingBottom: 8}}>
            {degrees.map((certification, index) => (
                <Stack key={"certification" + index} sx={{alignItems: isBigScreen ? alignments[index] : "center"}}>
                    <Typography variant="subtitle1">{certification.title}</Typography>
                    <Typography variant="body1">{certification.organization}, {certification.time}</Typography>
                </Stack>
            ))}
        </Stack>
    );
}