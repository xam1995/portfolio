import {Technology} from "@/data/model/types";
import {Paper, Tooltip} from "@mui/material";
import {Icon} from "@iconify/react";
import styles from "./TechCard.module.css"

type Props = {
    technology: Technology;
    isSmall?: boolean;
}


export function TechCard(props: Props) {
    const {technology, isSmall} = props;

    return (
        <Tooltip key={technology.name + "-hint"} title={technology.name}>
            <Paper key={technology.name} className={styles.paper}
                   style={{border: isSmall ? "none" : undefined, height: isSmall ? 26 : 50, width: isSmall ? 26 : 50}}>
                <Icon icon={`${technology?.set}:${technology?.slug}`} fontSize={isSmall ? "1.3rem" : "1.8rem"}/>
            </Paper>
        </Tooltip>
    );
}