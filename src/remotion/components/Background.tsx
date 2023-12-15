import React from 'react'
import { AbsoluteFill, Sequence } from "remotion"
import { loadFont } from "@remotion/google-fonts/WorkSans";
const { fontFamily } = loadFont(); 
export { fontFamily }

type Props = {}

const Background = (props: Props) => {
  return (
    <AbsoluteFill
      style={{
        padding: 54,
        background: "goldenrod",

    }}
    >
          
    </AbsoluteFill>
  )
}

export default Background