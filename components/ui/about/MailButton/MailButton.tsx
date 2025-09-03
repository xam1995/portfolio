import {Icon} from "@iconify/react";
import styles from "./MailButton.module.css";

type Props = {
    mailAddress: string;
}

export default function MailButton(props: Props) {
    const {mailAddress} = props;
    return (
        <a href={`mailto:${mailAddress}`}>
            <Icon icon="fa:send" className={styles.icon}/>
        </a>
    );
}