import React from 'react'
import RelationshipImg from '../assets/RelationshipImg'
import { fontFamily } from '../components/Background'
import { AbsoluteFill } from 'remotion'

type Props = {}

// relationships scene
const Scene4 = (props: Props) => {
  return (
      <AbsoluteFill
          style={{
              background: " linear-gradient(135deg, #FFD700 0%, #FFB6C1 50%, #DDA0DD 100%)",
               height: "100%",
              width: "100%",
              fontFamily
      }}
      >
           <h2 style={{
              textAlign: "center",
              fontSize: 80,

          }}>Entered 1 relationship</h2>

          <RelationshipImg />
    </AbsoluteFill>
  )
}

export default Scene4