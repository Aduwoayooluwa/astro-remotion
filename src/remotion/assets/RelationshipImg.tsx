import React from 'react'
import Celebrate from "../../assets/svgs/celebrate_1.svg"

type Props = {}

const RelationshipImg = (props: Props) => {
  return (
      <div>
          <img src={Celebrate as any}
        style={{
          width: "100%",
          position: "absolute",
            top: "30%"
        }}
        alt="bg image" />
    </div>
  )
}

export default RelationshipImg