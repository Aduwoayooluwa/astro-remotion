import {  AbsoluteFill, useVideoConfig } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import Background from "./components/Background";
import Intro from "./containers/Intro";
import { Scene2 } from "./containers/Scene2";
import Scene3 from "./containers/Scene3";
import Scene4 from "./containers/Scene4";
import Scene5 from "./containers/Scene5";
import Outro from "./containers/Outro";
import Ending from "./containers/Ending";
import { wipe } from "@remotion/transitions/wipe";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { MovingCar } from "./containers/First";

export function Wrap() {
    const { width, height } = useVideoConfig();

    return (
        <AbsoluteFill>
            <Background />
            <TransitionSeries>
                <TransitionSeries.Sequence durationInFrames={150}>
                        <Intro />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
                 <TransitionSeries.Sequence durationInFrames={150}>
                        <Scene2 />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={fade()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
                 <TransitionSeries.Sequence durationInFrames={180}>
                        <Scene3 />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={wipe()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />

                <TransitionSeries.Sequence durationInFrames={200}>
                        <Scene4 />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={clockWipe({width, height})}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
                <TransitionSeries.Sequence durationInFrames={230}>
                        <Scene5 />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
                <TransitionSeries.Sequence durationInFrames={260}>
                        <Outro />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
                <TransitionSeries.Sequence durationInFrames={320}>
                        <Ending />
                </TransitionSeries.Sequence>
                <TransitionSeries.Transition
                    presentation={slide()}
                    timing={linearTiming({ durationInFrames: 20 })}
                />
            </TransitionSeries>
        </AbsoluteFill>
    )
}