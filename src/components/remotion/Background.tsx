import { AbsoluteFill } from "remotion"

export const Background: React.FC<{
}> = () => {
    return (
        <AbsoluteFill
            style={{
              background: "linear-gradient(to bottom, #000000, #434343)",

                padding: 54,
        }}
        >

            <div
                style={{
                    flex: 1,
                    backgroundColor: "white"
            }}>

            </div>

        </AbsoluteFill>
    )
}