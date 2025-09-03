"use client"

import {Box, Container, Grid, Stack, Typography, useMediaQuery} from "@mui/material";
import {
    getAbout,
    getGitHub,
    getJobTitle,
    getLinkedIn,
    getMailAddress,
    getName,
    getProfilePicture,
    getTech
} from "@/services/about/service";
import SectionHeader from "@/components/ui/headers/SectionHeader/SectionHeader";
import MailButton from "@/components/ui/about/MailButton/MailButton";
import LinkedInButton from "@/components/ui/about/LinkedInButton/LinkedInButton";
import Image from "next/image";
import styles from "./About.module.css";
import GitHubUserButton from "@/components/ui/about/GitHubUserButton/GitHubUserButton";
import {ResponsiveStyleValue} from "@mui/system";
import {Property} from "csstype";
import FlexDirection = Property.FlexDirection;

type FlexOptions = ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse">;

export default function About() {
    const isBigScreen = useMediaQuery("(min-width: 692px)");
    const about = getAbout();
    const gitHub = getGitHub();
    const linkedIn = getLinkedIn();
    const mailAddress = getMailAddress();
    const profilePictureUrl = getProfilePicture();
    const name = getName();
    const jobTitle = getJobTitle();
    const tech = getTech();

    function handleScreenSize<T>(optionA: T, optionB: T) {
        if (isBigScreen) return optionA;
        return optionB;
    }

    return (
        <Container sx={{paddingY: 5}} maxWidth="md" id="about">
            <SectionHeader label="About" icon="carbon:user-avatar-filled-alt"/>
            <Box style={{
                display: "flex",
                flexDirection: handleScreenSize<FlexDirection>("row", "column"),
                alignItems: handleScreenSize("initial", "center"),
            }}>
                <div>
                    <Image src={profilePictureUrl} width={150} height={150} alt="profile picture"
                           className={styles.image}/>
                    <Grid container spacing={1} justifyContent={handleScreenSize("space-between", "center")}>
                        <GitHubUserButton gitHubPage={gitHub}/>
                        <LinkedInButton link={linkedIn}/>
                        <MailButton mailAddress={mailAddress}/>
                    </Grid>
                </div>
                <Grid container direction="column" spacing={1}
                      sx={{
                          paddingLeft: handleScreenSize<number>(5, 0),
                          alignItems: handleScreenSize<string>("initial", "center"),
                      }}>
                    <Typography variant="h3" className={styles.text}>{name}</Typography>
                    <Stack direction={handleScreenSize<FlexOptions>("row", "column")} spacing={1}>
                        <Typography variant="h5">{jobTitle}</Typography>
                        <Typography variant="h5">| {tech}</Typography>
                    </Stack>
                    <Typography sx={{flex: 3, textAlign: handleScreenSize("start", "justify")}}
                                variant="body1">{about}</Typography>
                </Grid>
            </Box>
        </Container>
    );
}