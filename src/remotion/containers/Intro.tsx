import React from 'react';
import { AbsoluteFill, useCurrentFrame, spring } from 'remotion';
import IntroImage from '../assets/IntroImage';
import { fontFamily } from '../components/Background';
import { MovingCar } from './First';

const Intro = () => {
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
    <AbsoluteFill>
      <p style={{
        fontWeight: 600,
        fontSize: 90,
        textAlign: "center",
        fontFamily: fontFamily,
        opacity: textSpring, 
        transform: `translateY(${(1 - textSpring) * 100}px)` 
      }}>Your Year in Wrap</p>
      <div style={{
        transform: `scale(${imageSpring})`,
        opacity: imageSpring 
      }}>
        <IntroImage />
      </div>

      <MovingCar />
    </AbsoluteFill>
  );
};

export default Intro;
