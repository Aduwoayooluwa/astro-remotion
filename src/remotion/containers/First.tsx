import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion"
import Car from "../../assets/images/car_moving.gif"
import { useManageForm } from "../../context/ManageFormContext";

export function MovingCar() {
    const frame = useCurrentFrame();

    const { formDetails } = useManageForm()

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
            <p>Hello { formDetails?.username ?? "" }</p>
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