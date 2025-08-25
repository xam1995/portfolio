import {ABOUT, CALL_TO_ACTION, EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK, PROFILE_PICTURE_URL} from "@/data/about/data";

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
    return PROFILE_PICTURE_URL;
}

export function getCallToAction(): string {
    return CALL_TO_ACTION;
}