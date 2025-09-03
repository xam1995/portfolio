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

    function adjustSize(): number {
        if (isSmall) return 26;
        return 50;
    }

    function adjustFontSize(): string {
        if (isSmall) return "1.3rem";
        return "1.8rem";
    }

    function adjustBorder(): string | undefined{
        if (isSmall) return "none";
        return undefined;
    }

    return (
        <Tooltip key={technology.name + "-hint"} title={technology.name}>
            <Paper key={technology.name} className={styles.paper}
                   style={{border: adjustBorder(), height: adjustSize(), width: adjustSize()}}>
                <Icon icon={`${technology?.set}:${technology?.slug}`} fontSize={adjustFontSize()} className={styles.icon}/>
            </Paper>
        </Tooltip>
    );
}