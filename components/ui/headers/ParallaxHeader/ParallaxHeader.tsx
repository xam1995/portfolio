import {IParallax, Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useRef} from "react";
import {ParallaxConfig} from "@/data/model/types";
import styles from "./ParallaxHeader.module.css";

type Props = {
    parallaxConfigs: ParallaxConfig[];
}

export default function ParallaxHeader(props: Props) {
    const {parallaxConfigs} = props;
    const ref = useRef<IParallax>(null);

    function scrollHeader() {
        if (ref.current) ref.current.scrollTo(0.9);
    }

    function determineTop(layer: ParallaxConfig): string | undefined {
        if (layer.config?.horizontal) return "100vh";
        return undefined;
    }

    function determineWidth(layer: ParallaxConfig): string {
        return `${100 + (layer.extraWidth ?? 0)}vw`;
    }

    function determineUrl(layer: ParallaxConfig): string {
        return `url(${layer.url})`;
    }

    function determineScaling(layer: ParallaxConfig): string {
        return layer.fixedHeight ? "100%" : "100% auto";
    }

    return (
        <Parallax
            pages={2}
            ref={ref}
            className={styles.parallax}
            onClick={scrollHeader}
        >
            {parallaxConfigs.map(layer => (
                <ParallaxLayer key={layer.url}
                               factor={layer.config?.factor}
                               speed={layer.config?.speed}
                               horizontal={layer.config?.horizontal}
                               offset={layer.config?.offset}
                               style={{
                                   width: determineWidth(layer),
                                   backgroundImage: determineUrl(layer),
                                   backgroundSize: determineScaling(layer),
                                   top: determineTop(layer),
                               }}/>))}
        </Parallax>
    );
}