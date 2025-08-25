import {Technology} from "@/data/model/types";

const ICON_SET: string[] = [
    "devicon-plain",
    "famicons"
]
export const TECHNOLOGIES: Technology[] = [
    {name: "Java", isLanguage: true, slug: "java", set: ICON_SET[0]},
    {name: "JavaScript", isLanguage: true, slug: "javascript", set: ICON_SET[0]},
    {name: "TypeScript", isLanguage: true, slug: "typescript", set: ICON_SET[0]},
    {name: "Python", isLanguage: true, slug: "python", set: ICON_SET[0]},
    {name: "SQL", isLanguage: true, slug: "azuresqldatabase", set: ICON_SET[0]},
    {name: "Angular", isFramework: true, slug: "angular", set: ICON_SET[0]},
    {name: "React", isFramework: true, slug: "logo-react", set: ICON_SET[1]},
    {name: "React Native", isFramework: true, slug: "logo-react", set: ICON_SET[1]},
    {name: "Docker", isTool: true, slug: "docker", set: ICON_SET[0]},
    {name: "Cypress", isTool: true, slug: "cypressio-wordmark", set: ICON_SET[0]},
    {name: "Git", isTool: true, slug: "git", set: ICON_SET[0]},
    {name: "JUnit", isLibrary: true, slug: "junit-wordmark", set: ICON_SET[0]},
    {name: "Mockito", isLibrary: true},
    {name: "Enterprise Architect", isTool: true},
    {name: "IntelliJ", isTool: true, slug: "intellij", set: ICON_SET[0]},
    {name: "Visual Studio", isTool: true, slug: "visualstudio", set: ICON_SET[0]},
    {name: "SonarQube", isTool: true, slug: "sonarqube-wordmark", set: ICON_SET[0]},
    {name: "Jenkins", isTool: true, slug: "jenkins", set: ICON_SET[0]},
    {name: "Postman", isTool: true, slug: "postman", set: ICON_SET[0]},
    {name: "Jira", isTool: true, slug: "jira", set: ICON_SET[0]},
    {name: "Cucumber", isLanguage: true, slug: "cucumber", set: ICON_SET[0]},
    {name: "Node.js", isTool: true, slug: "nodejs-wordmark", set: ICON_SET[0]},
    {name: "HTML", isLanguage: true, slug: "html5", set: ICON_SET[0]},
    {name: "CSS", isLanguage: true, slug: "css3-wordmark", set: ICON_SET[0]},
    {name: "Next.js", isFramework: true, slug: "nextjs", set: ICON_SET[0]},
    {name: "SpringBoot", isFramework: true, slug: "spring", set: ICON_SET[0]},
];