import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion"
import Car from "../../../assets/images/car_moving.gif"

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

    return (
        <img
        src={Car as any}
            style={{
            width:"600px",
            position: "absolute",
            top: 500 + planetY - planetSize / 2,
            left: 550 - planetSize / 2,
        }}
        />
    )
}