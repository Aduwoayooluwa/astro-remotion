import React from 'react'
import AchievementImage from "../../assets/images/Achievement.gif";
import { Gif } from "@remotion/gif";
type Props = {}

const AchievementsImg = (props: Props) => {
  return (
      <div>
          <Gif src={AchievementImage as any}
        playbackRate={ 0.5}
        style={{
          width: "100%",
          position: "absolute",
            top: "30%",
            height: "1000px",
           
          }}
          
          loopBehavior={"pause-after-finish"}/></div>
  )
}

export default AchievementsImg