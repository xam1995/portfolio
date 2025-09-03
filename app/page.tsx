"use client"

import Image from "next/image";
import {useMediaQuery} from "@mui/material";
import Projects from "@/components/pages/projects/Projects/Projects";
import CV from "@/components/pages/cv/CV";
import ParallaxHeader from "@/components/ui/headers/ParallaxHeader/ParallaxHeader";
import About from "@/components/pages/about/About";
import {getParallaxConfigs} from "@/services/parallax/service";
import Contact from "@/components/pages/contact/Contact";
import SpringFade from "@/components/style/SpringFade";
import {ReactElement} from "react";


export default function Home(): ReactElement {
    const isBigScreen = useMediaQuery("(min-width: 1024px)");
    const pages: ReactElement[] = [About(), CV(), Projects(), Contact()];

    function regularHeader(): ReactElement {
        return (<div style={{flex: "0 0 100vh"}}>
            <ParallaxHeader parallaxConfigs={getParallaxConfigs()}/>
        </div>);
    }
    function alternativeHeader(): ReactElement {
        return (<Image
            src={"images/projects/portfolio_mountain_lake.webp"}
            height={300}
            width={100}
            sizes="100vw"
            alt="header"
            priority
            style={{width: "100%", height: "auto"}}
        />);
    }

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {isBigScreen ? regularHeader() : alternativeHeader()}
            {pages.map((page, index) => <SpringFade key={`page${index}`}>{page}</SpringFade>)}
        </div>
    );

}