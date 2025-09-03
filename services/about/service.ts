import {
    ABOUT,
    CALL_TO_ACTION,
    EMAIL_ADDRESS,
    GITHUB_LINK,
    JOB_TITLE,
    LINKEDIN_LINK,
    NAME,
    TAB_TITLE,
    TECH
} from "@/data/about/data";
import {getImage} from "@/services/images/service";

export function getAbout(): string {
    return ABOUT;
}

export function getLinkedIn(): string {
    return LINKEDIN_LINK;
}

export function getGitHub(): string {
    return GITHUB_LINK;
}

export function getMailAddress(): string {
    return EMAIL_ADDRESS;
}

export function getProfilePicture(): string {
    return getImage("about", "profile.webp");
}

export function getCallToAction(): string {
    return CALL_TO_ACTION;
}

export function getTabTitle(): string {
    return TAB_TITLE;
}

export function getName(): string {
    return NAME;
}

export function getJobTitle(): string {
    return JOB_TITLE;
}

export function getTech(): string {
    return TECH;
}