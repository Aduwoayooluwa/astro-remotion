import { AbsoluteFill, spring, useCurrentFrame } from "remotion";
import { fontFamily } from '../remotion/Intro';
import { StarSVG } from "../../assets/svgs/Star";
import { Explosion } from "./assets/Explosion";
import { Star } from "./Star"
import { MovingCar } from "./assets/CarMoving";

export function Frame2() {
    const frame = useCurrentFrame();

    // Animation for the text
    const textTranslateY = spring({
        frame: frame,
        fps: 30,
        from: -100,
        to: 0,
    });

    // Animation for the SVG
    const svgScale = spring({
        frame: frame,
        fps: 30,
        config: {
            damping: 200,
        },
    });

    return (
        <AbsoluteFill 
        
            style={{ 
                fontFamily,
                background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
            }}>
            {/* Animated Text */}
           

            {/* Animated SVG */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: `translate(-50%, -50%) scale(${svgScale})`,
                flexDirection: 'column',
            }}>
                <div>
                    <Explosion>
                    <Star />
                     
                </Explosion>
                </div>
                <br />
               
            </div>

             <div style={{
                        transform: `translateX(-50%) translateY(${textTranslateY}px)`,
                        textAlign: 'center',
                        fontSize: '50px',
                        color: 'black',
                        fontWeight: 'bold',
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                    }}>
                        Drank Garri 300 days out of 365...
            </div>
        </AbsoluteFill>
    );
}
