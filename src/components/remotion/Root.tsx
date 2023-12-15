import React from "react";
import { Composition, Folder, Still } from "remotion";
import { MyVideo } from "./Video";
import { MyComposition } from "./Composition"
import { Stories } from "./Stories"

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Empty"
        component={MyVideo}
        durationInFrames={1200}
        fps={30}
        width={1080}
        height={1920}
      />

      <Composition
        id="second"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
    <Composition
        id="stories"
        component={Stories}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          messageIds: [
            1, 2, 3
          ]
        }}
      />
    </>
  );
};