import {Icon} from "@iconify/react";

type Props = {
    mailAddress: string;
}

export default function MailButton(props: Props) {
    const {mailAddress} = props;
    return (
        <a href={`mailto:${mailAddress}`}>
            <Icon icon="fa:send" color="white" fontSize="1.8rem"/>
        </a>
    );
}