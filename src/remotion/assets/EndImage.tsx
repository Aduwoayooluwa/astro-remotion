import React from 'react'
import TwentyFour from "../../assets/images/twenty_four.jpg"
import { Gif } from "@remotion/gif";

type Props = {}

const EndImage = (props: Props) => {
  return (
      <div>
          <img src={TwentyFour as any}
        style={{
          width: "100%",
          position: "absolute",
            top: "10%"
        }}
        alt="bg image" />
    </div>
  )
}

export default EndImage