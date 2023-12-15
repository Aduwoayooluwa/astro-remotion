import React from 'react'
import { AbsoluteFill } from 'remotion'
import Night from "../../assets/images/night.jpg"

type Props = {}

const Ending = (props: Props) => {
  return (
      <AbsoluteFill
          style={{
              background: "#044374",
              height: "100%",
              width: "100%"

      }}
      >
          <img alt="ending" src={Night as any} style={{
              width: "100%",
              position: "absolute",
              top: "30%"
          }} />
          
    </AbsoluteFill>
  )
}

export default Ending