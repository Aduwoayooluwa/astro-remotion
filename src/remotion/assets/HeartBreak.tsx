import React from 'react'
import HeartBreakImg from "../../assets/images/Heartbroken.gif"
import { Gif } from "@remotion/gif";

type Props = {}

const HeartBreak = (props: Props) => {
  return (
      <div>
          <Gif src={HeartBreakImg as any}
        style={{
          width: "100%",
          position: "absolute",
            top: "30%",
            height:"1000px"
        }}
              playbackRate={0.5}
              loopBehavior={"pause-after-finish"}
          />
    </div>
  )
}

export default HeartBreak