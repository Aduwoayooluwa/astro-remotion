import React from 'react'
import BirthdayImage from "../../assets/images/birthday_gif.gif"
import { Gif } from "@remotion/gif";
import { useVideoConfig } from "remotion";

type Props = {}

const BirthdayImg = (props: Props) => {
  const { width, height } = useVideoConfig();

  return (
      <div>
      <Gif src={BirthdayImage as any}
        playbackRate={ 0.5}
        style={{
          width: "100%",
          height: "1000px",
          position: "absolute",
            top: "30%"
        }}
        loopBehavior={"pause-after-finish"}
      />
    </div>
  )
}

export default BirthdayImg