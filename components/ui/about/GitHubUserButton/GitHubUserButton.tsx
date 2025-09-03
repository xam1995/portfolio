import {Icon} from "@iconify/react";
import styles from "./GitHubUserButton.module.css";

type Props = {
    gitHubPage: string;
};
export default function GitHubUserButton(props: Props) {
    const {gitHubPage} = props;

    return (
        <a href={gitHubPage} target="_blank">
            <Icon icon="fa:github" className={styles.icon}/>
        </a>
    );
}