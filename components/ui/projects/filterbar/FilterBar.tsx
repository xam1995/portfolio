"use client"

import StandardButton from "@/components/ui/projects/filterbar/StandardButton";
import {Dispatch, SetStateAction, useState} from "react";
import {getFrameworks, getLanguages, getLibraries, getTechnologies, getTools} from "@/services/technologies/service";
import {Project, Technology} from "@/data/model/types";
import {getProjects} from "@/services/projects/service";
import {Stack} from "@mui/system";

type Props = {
    setState: Dispatch<SetStateAction<Technology[]>>;
    setProjectState: Dispatch<SetStateAction<Project[]>>;
};

export default function FilterBar(props: Props) {
    const values = ["Reset", "Frameworks", "Languages", "Tools", "Libraries"];
    const actions = [getTechnologies, getFrameworks, getLanguages, getTools, getLibraries];
    const [activeFilter, setActiveFilter] = useState<string>(values[1]);

    if (!activeFilter || activeFilter === values[0]) {
        props.setState(getTechnologies());
        props.setProjectState(getProjects());
    }

    return (
        <Stack direction="row" className="filter-bar" spacing={1}>
            {values.map((value: string, i: number) =>
                (<StandardButton
                    name={value}
                    key={value}
                    activeFilter={activeFilter}
                    onClick={() => {
                        setActiveFilter(value);
                        props.setState(actions[i]());
                    }}
                />))
            }
        </Stack>
    );
}