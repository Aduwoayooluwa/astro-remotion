import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion"
import Car from "../../assets/images/car_moving.gif"

export function MovingCar() {
    const frame = useCurrentFrame();

    const planetSize = interpolate(frame, [80, 180], [1200, 0], {
        extrapolateRight: "clamp",
        easing: Easing.inOut((t) => t),
    });

    const planetY = interpolate(frame, [80, 180], [700, 0], {
        extrapolateRight: "clamp",
        easing: Easing.inOut((t) => t),
    });

     const carX = interpolate(frame, [0, 240], [-600, 1920], {
        extrapolateRight: 'clamp',
        easing: Easing.inOut(Easing.ease),
    });
    return (
        <AbsoluteFill
            style={{
                width: "100%",
                height: "100%"
        }}
        
        >
            {/* div for the road */}
             <div style={{
                position: 'absolute',
                width: '100%',
                height: '200px',
                backgroundColor: 'black',
                bottom:0
            }} />

            <img
            src={Car as any}
            style={{
                width: "600px",
                position: "absolute",
                // top: 500 + planetY - planetSize / 2,
                left: carX,
                bottom: '100px'

            }}
        />
        </AbsoluteFill>
    )

}