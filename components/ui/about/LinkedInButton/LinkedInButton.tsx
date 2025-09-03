import {Icon} from "@iconify/react";
import styles from "./LinkedInButton.module.css";

type Props = {
    link: string;
};

export default function LinkedInButton(props: Props) {
    const {link} = props;
    return (
        <a href={link} target="_blank">
            <Icon icon="devicon-plain:linkedin" className={styles.icon}/>
        </a>
    );
}