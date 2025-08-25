import {Grid, Typography} from "@mui/material";
import {Icon} from "@iconify/react";

type Props = {
    icon: string;
    label: string;
    justifyContent?: boolean;
}

export default function SectionHeader(props: Props) {
    const {icon, label} = props;

    return (
        <Grid container direction="row" spacing={2} alignItems="center"
              sx={{paddingBottom: 8}}>
            <Icon icon={icon} color="white" fontSize="1.8rem"
                  style={{border: "2px solid white", borderRadius: 12, padding: 10, height: 50, width: 50}}/>
            <Typography variant="h4">{label}</Typography>
        </Grid>
    );
}