import {Icon} from "@iconify/react";

type Props = {
    link: string;
};

export default function LinkedInButton(props: Props) {
    const {link} = props;
    return (
        <a href={link} target="_blank">
            <Icon icon="devicon-plain:linkedin" color="white" fontSize="1.8rem"/>
        </a>
    );
}