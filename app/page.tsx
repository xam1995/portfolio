"use client"

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
                : <img src={"/images/projects/portfolio_mountain_lake.webp"} alt="header" style={{width: "100%"}}/>}

            {pages.map((page, index) => <SpringFade key={`page${index}`} children={page}/>)}
        </div>
    )
        ;

}