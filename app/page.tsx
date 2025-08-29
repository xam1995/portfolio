"use client"

import Image from "next/image";
import {useMediaQuery} from "@mui/material";
import Projects from "@/components/pages/projects/Projects";
import CV from "@/components/pages/cv/CV";
import ParallaxHeader from "@/components/ui/headers/ParallaxHeader/ParallaxHeader";
import About from "@/components/pages/about/About";
import {getParallaxConfigs} from "@/services/parallax/service";
import Contact from "@/components/pages/contact/Contact";
import SpringFade from "@/components/style/SpringFade";


export default function Home() {
    const isBigScreen = useMediaQuery("(min-width: 1024px)");
    const pages = [About(), CV(), Projects(), Contact()];

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {isBigScreen ? <div style={{flex: "0 0 100vh", overflow: "hidden"}}>
                    <ParallaxHeader parallaxConfigs={getParallaxConfigs()}/>
                </div>
                : <Image
                    src={"images/projects/portfolio_mountain_lake.webp"}
                    height={300}
                    width={100}
                    sizes="100vw"
                    alt="header"
                    priority
                    style={{width: "100%", height: "auto"}}
                />}

            {pages.map((page, index) => <SpringFade key={`page${index}`}>{page}</SpringFade>)}
        </div>
    )
        ;

}