import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring, interpolate, useVideoConfig } from 'remotion';
import BirthdayImg from '../assets/BirthdayImg';
import { fontFamily } from '../components/Background';

export function Scene2() {
    const frame = useCurrentFrame();

    const { durationInFrames } = useVideoConfig();

    const opacity = interpolate(
        frame,
        [0, durationInFrames / 4, durationInFrames / 2, (3 * durationInFrames) / 4, durationInFrames],
        [0, 1, 1, 1, 0]
    );

    const textSpring = spring({
        frame: frame,
        fps: 30,
        config: {
            mass: 1,
            damping: 10,
            stiffness: 100,
        },
    });

    const dateScale = interpolate(frame, [0, 30], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #FFD700 0%, #DAA520 50%, #90EE90 100%)",
                height: "100%",
                width: "100%",
                fontFamily: fontFamily,
                opacity
            }}
        >
            <h2 style={{
                textAlign: "center",
                fontSize: 90,
                opacity: textSpring,
                position: "absolute",
                top:"10%",
                transform: `translateY(${(1 - textSpring) * -50}px)`
            }}>Your Birthday on <span style={{ 
                display: "inline-block", 
                transform: `scale(${dateScale})` 
            }}>24th</span> of April</h2>
            <div style={{
                opacity: textSpring,
               
            }}>
                <BirthdayImg />
            </div>
        </AbsoluteFill>
    );
}
