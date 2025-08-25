"use client"

import Button from "@mui/material/Button"

type Props = {
    name: string;
    onClick?: () => void;
    isHighlighted?: boolean;
    activeFilter?: string;
};

export default function StandardButton(props: Props) {
    const color = props.isHighlighted ? "gold" : null;

    return (
        <Button variant={props.activeFilter && props.activeFilter === props.name ? "contained" : "outlined"}
                name={props.name}
                onClick={() => {
                    props.onClick && props.onClick();
                }}
                sx={{color: color, borderColor: color}}
        >
            {props.name}
        </Button>
    );
}