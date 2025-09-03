import {animated, useInView, useSpring} from "@react-spring/web";
import React, {Children, ReactNode} from "react";


type SpringFadeProps = {
    children: ReactNode;
}

export default function SpringFade(props: SpringFadeProps) {
    const {children} = props;
    const [ref, inView] = useInView({once: true});
    const styles = useSpring({
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 16,
        config:
            {
                tension: 80,
                friction: 26
            }
    });
    return (
        <animated.div
            ref={ref}
            style={{...styles, translateY: styles.y.to(v => `${v}px`)}}
        >
            {Children.map(children, (child: ReactNode) => child)}
        </animated.div>
    )
}