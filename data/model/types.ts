import {ParallaxLayerProps} from "@react-spring/parallax";

export interface Project {
    slug: string;
    title: string;
    subtitle?: string;
    summary?: string;
    image: string;
    technologies?: Technology[];
    repoLink?: string;
    videoLink?: string;
    articleLink?: string;
}

export interface Technology {
    name: string;
    slug?: string;
    set?: string;
}

export interface Job {
    title: string;
    startDate: string;
    endDate: string;
    employer: string;
    bulletPoints: string[];
    technologies?: Technology[];
}

export interface Education {
    title: string;
    organization: string;
    startDate: string;
    endDate: string;
    bulletPoints: string[];
    technologies?: Technology[];
}

export interface Certification {
    title: string;
    organization: string;
    time: string;
    link?: string;
}

export interface ParallaxConfig {
    url: string;
    extraWidth?: number;
    fixedHeight?: boolean;
    config?: ParallaxLayerProps;
}