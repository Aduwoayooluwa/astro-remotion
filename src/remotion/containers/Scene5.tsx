import React from 'react'
import HeartBreak from '../assets/HeartBreak'
import { AbsoluteFill } from 'remotion'
import { fontFamily } from '../components/Background'

type Props = {}

const Scene5 = (props: Props) => {
    // heartbroken

  return (
      <AbsoluteFill
          style={{
             height: "100%",
              width: "100%",
              fontFamily: fontFamily,
              background: "linear-gradient(135deg, #545454 0%, #7f8c8d 50%, #bdc3c7 100%)",
                backgroundSize: "cover"
      }}
      >
           <h2 style={{
              textAlign: "center",
              fontSize: 90
          }}>Got Served Breakfast</h2>

          <HeartBreak />
    </AbsoluteFill>
  )
}

export default Scene5