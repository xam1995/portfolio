import {Stack} from "@mui/system";
import {Typography} from "@mui/material";
import {Language} from "@/data/model/types";

type Props = { languages: Language[] };

export default function LanguageSection(props: Props) {
    const {languages} = props;

    return (
        <Stack spacing={2} direction="row" sx={{justifyContent: 'space-between'}}>
            {languages.map(language => (
                <Typography key={language.name} variant="subtitle1">{language.name} ({language.level})</Typography>
            ))}
        </Stack>
    );
}