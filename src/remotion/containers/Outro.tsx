import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring } from 'remotion';
import EndImage from '../assets/EndImage';
import { fontFamily } from '../components/Background';

const Outro = () => {
    const frame = useCurrentFrame();

    const textSpring = spring({
        frame: frame,
        fps: 30,
        config: {
            mass: 1,
            damping: 10,
            stiffness: 100,
        },
    });

    const imageSpring = spring({
        frame: frame - 15, 
        fps: 30,
        config: {
            mass: 1,
            damping: 10,
            stiffness: 100,
        },
    });

    return (
        <AbsoluteFill
            style={{
                fontFamily: fontFamily,
                width: "100%",
                height: "100%",
                background: "white",

            }}
        >
            <div style={{
                transform: `scale(${imageSpring})`,
                opacity: imageSpring
            }}>
                <EndImage />
            </div>
            <h3
                style={{
                    textAlign: "center",
                    fontSize: 50,
                    position: "absolute",
                    bottom: "20%",
                    opacity: textSpring,
                    transform: `translateY(${(1 - textSpring) * 100}px)` 
                }}
            >You had a Splendid 2023 overall!! It was great 🥰. Cheers to a better 2024</h3>
        </AbsoluteFill>
    );
}

export default Outro;
