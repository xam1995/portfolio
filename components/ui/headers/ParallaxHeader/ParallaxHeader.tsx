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
        if (ref.current) ref.current.scrollTo(1);
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
                                   width: layer.url.endsWith("5.webp") ? "109vw" : "100vw",
                                   backgroundImage: `url(${layer.url})`,
                                   backgroundSize: "100% auto",
                                   top: layer.config?.horizontal ? "100vh" : undefined,
                               }}/>))}
        </Parallax>

    );
}