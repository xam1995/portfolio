import {Container, Grid, Typography} from "@mui/material";
import SectionHeader from "@/components/ui/headers/SectionHeader";
import MailButton from "@/components/ui/about/MailButton";
import {getCallToAction, getLinkedIn, getMailAddress} from "@/services/about/service";
import LinkedInButton from "@/components/ui/about/LinkedInButton";


export default function Contact() {
    const mailAddress = getMailAddress();
    const linkedIn = getLinkedIn();
    const callToAction = getCallToAction();

    return (
        <Container
            sx={{paddingY: 3, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}
            maxWidth="md">
            <SectionHeader icon="lucide:rocket" label="Let's Create Stellar Applications"/>
            <Typography variant="h5" textAlign="center">{callToAction}</Typography>
            <Grid container spacing={2} sx={{paddingY: 4}}>

            <LinkedInButton link={linkedIn} />
            <MailButton mailAddress={mailAddress} />
            </Grid>
        </Container>)
}