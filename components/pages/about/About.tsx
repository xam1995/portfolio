"use client"

import {Box, Container, Grid, Typography, useMediaQuery} from "@mui/material";
import {Icon} from "@iconify/react";
import {getAbout, getGitHub, getLinkedIn, getMailAddress, getProfilePicture} from "@/services/about/service";
import SectionHeader from "@/components/ui/headers/SectionHeader";
import MailButton from "@/components/ui/about/MailButton";
import LinkedInButton from "@/components/ui/about/LinkedInButton";
import Image from "next/image";

export default function About() {
    const isBigScreen = useMediaQuery("(min-width: 600px)");
    const about = getAbout();
    const gitHub = getGitHub();
    const linkedIn = getLinkedIn();
    const mailAddress = getMailAddress();
    const profilePictureUrl = getProfilePicture();

    if (isBigScreen) {
    }
    return (
        <Container sx={{paddingY: 5}} maxWidth="md" id="about">

            {isBigScreen ? <SectionHeader label="About" icon="carbon:user-avatar-filled-alt"/> : null}

            <Box style={{
                display: "flex",
                flexDirection: isBigScreen ? "row" : "column",
                alignItems: isBigScreen ? "initial" : "center",
            }}>
                <div>
                    <Image src={profilePictureUrl} width={150} height={150} alt="profile picture"
                            style={{minHeight: 150, minWidth: 150, marginBottom: 20}}/>
                    <Grid container spacing={1} justifyContent={isBigScreen ? "space-between" : "center"}>
                        <a href={gitHub} target="_blank">
                            <Icon icon="fa:github" color="white" fontSize="1.8rem"/>
                        </a>
                        <LinkedInButton link={linkedIn}/>
                        <MailButton mailAddress={mailAddress}/>
                    </Grid>
                </div>
                <Grid container direction="column" spacing={1}
                      sx={{
                          paddingLeft: isBigScreen ? 5 : 0,
                          alignItems: isBigScreen ? "initial" : "center",
                      }}>
                    <Typography variant="h3">Max</Typography>
                    <Typography variant="h5">Software Developer | Angular, React, Java</Typography>
                    <Typography sx={{flex: 3, textAlign: isBigScreen ? "start" : "justify"}} variant="body1">{about}</Typography>
                </Grid>
            </Box>
        </Container>
    );
}