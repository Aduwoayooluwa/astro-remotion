import React from "react";
import { Composition, Folder, Still } from "remotion";
import {Wrap} from "./Wrap";


const Root: React.FC = () => {
    return (
        <
        Composition
        id="Empty"
        component={Wrap}
        durationInFrames={1200}
        fps={30}
        width={1080}
        height={1920}
      />
    )
}


export default Root