import React from 'react'
import YearImg from "../../assets/svgs/2023.svg"
type Props = {}

const IntroImage = (props: Props) => {
  return (
    <div>
      <img src={YearImg as any}
        style={{
          width: "100%",
          position: "absolute",
            top: "40%"
        }}
        alt="bg image" />
    </div>
  )
}

export default IntroImage