import React from 'react'
import { AbsoluteFill } from 'remotion'
import AchievementsImg from '../assets/AchievementsImg'
import { fontFamily } from '../components/Background'
// achievements scene

type Props = {}

const Scene3 = (props: Props) => {
  return (
      <AbsoluteFill
        style={{
              background: "linear-gradient(135deg, #FADA5E 0%, #3B9BBF 50%, #FFA500 100%)",
              height: "100%",
              width: "100%",
              fontFamily
          }}
      >
           <h2 style={{
              textAlign: "center",
              fontSize: 90
          }}>Your Acomplishments</h2>
          <AchievementsImg />
    </AbsoluteFill>
  )
}

export default Scene3