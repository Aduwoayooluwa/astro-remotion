import React from 'react';
import { useCurrentFrame, interpolate, AbsoluteFill } from 'remotion';
import DownWave from "../../assets/svgs/DownWaves"
import { loadFont } from "@remotion/google-fonts/WorkSans";
import { MovingCar } from './assets/CarMoving';
import { ShineEffect } from './assets/ShineEffect';
import { Confetti } from './assets/Confetti';
const { fontFamily } = loadFont(); 

export { fontFamily };
    
export const Intro = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

    return (
      <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 100,
        background: "linear-gradient(to bottom, #000000, #0a2342)",
        position: "relative",
        fontFamily
      }}
    >
        <div className="p-10" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity}}>
                <p style={{
                    fontSize: 80,
                    fontWeight: 600, 
            textAlign: 'center',
                    color: "white"
                }} className="text-sm">2023 Wrapped</p>

                <span style={{
                    fontSize: 60,
                    fontWeight: 600, 
            textAlign: 'center',
                    color:"white"
                }}>Shege Version</span>

          
                
        </div>
        <Confetti />
         
        <div style={{
          position: 'absolute',
          bottom: 30,
          width: "100%",
          left: 0
        }}>
         
        </div>
         <MovingCar />
        {/* <DownWave /> */}
    </AbsoluteFill>
  );
};
