import {Container, Grid, Typography} from "@mui/material";
import SectionHeader from "@/components/ui/headers/SectionHeader/SectionHeader";
import MailButton from "@/components/ui/about/MailButton/MailButton";
import {getCallToAction, getLinkedIn, getMailAddress} from "@/services/about/service";
import LinkedInButton from "@/components/ui/about/LinkedInButton/LinkedInButton";
import styles from './Contact.module.css';


export default function Contact() {
    const mailAddress = getMailAddress();
    const linkedIn = getLinkedIn();
    const callToAction = getCallToAction();

    return (
        <Container className={styles.container} maxWidth="md">
            <SectionHeader icon="lucide:rocket" label="Beam Me A Message"/>
            <Typography variant="h5" textAlign="center">{callToAction}</Typography>
            <Grid container spacing={2} className={styles.grid}>
                <LinkedInButton link={linkedIn}/>
                <MailButton mailAddress={mailAddress}/>
            </Grid>
        </Container>
    )
}