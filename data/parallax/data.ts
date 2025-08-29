import {ParallaxConfig} from "@/data/model/types";

export const PARALLAX_CONFIGS: ParallaxConfig[] = [

    {
        url: "images/parallax/portfolio_mountain_lake_8.webp",
        config: {factor: 2}
    },

    {
        url: "images/parallax/portfolio_mountain_lake_9.webp",
        config: {factor: 2, speed: 0.75, offset: 0.2}
    },
    {
        url: "images/parallax/portfolio_mountain_lake_7.webp",
        config: {
            factor: 2,
            speed: -1,
            offset: 0.15,
        }
    },
    {
        url: "images/parallax/portfolio_mountain_lake_5.webp",
        config: {
            factor: 2,
            speed: 0.1,
            horizontal: true,
        }
    },
    {
        url: "images/parallax/portfolio_mountain_lake_2.webp",
        config: {
            factor: 2,
            speed: -0.1,
            offset: -0.2,
            horizontal: true,
        }
    },
    {
        url: "images/parallax/portfolio_mountain_lake_4.webp",
        config: {
            factor: 2,
            offset: -0.25,
            speed: -0.1,
            horizontal: true,
        }
    },
    {
        url: "images/parallax/portfolio_mountain_lake_3.webp",
        config: {
            speed: 0.1,
            offset: 0.15,
            horizontal: true,
        }
    },
    {
        url: "images/parallax/portfolio_mountain_lake_1.webp",
        config: {
            factor: 2,
            offset: 0.1
        },
    },
]