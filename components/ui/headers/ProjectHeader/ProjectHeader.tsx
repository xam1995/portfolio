import {Typography} from "@mui/material";
import {Grid} from "@mui/system";
import Image from "next/image";
import {Project, Technology} from "@/data/model/types";
import {TechCard} from "@/components/ui/cv/TechCard/TechCard";
import styles from "./ProjectHeader.module.css";

type Props = {
    project: Project;
}

export default function ProjectHeader(props: Props) {
    const {project} = props;

    return (<div>
            <Typography variant="h3">{project.title}</Typography>
            {project.image && (
                <div className={styles.div}
                >
                    <Image sizes="100vw"
                           width={100}
                           height={300}
                           src={project.image}
                           alt={`${project.slug}1`}
                           className={styles.image}
                    />
                </div>)
            }
            <Grid container spacing={2} className={styles.grid}>
                {project.technologies?.map((technology: Technology) => (
                    <TechCard key={`${technology.name}-${project.slug}-pp`} technology={technology}/>))}
            </Grid>
        </div>
    );
}