import { StatCard } from '../ui/StatsCard';
import { Timeline } from '../ui/Timeline';
import {Intro} from "./Intro"
import { AbsoluteFill, Sequence } from "remotion"
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { flip } from "@remotion/transitions/flip";
import { Frame2 } from './Frame2';
import { Background } from './Background';
export const MyVideo = () => {
  const fakeData = {
    stats:{ title: 'Number of shege faced', value: 500 },

    timelineEvents: [
      { title: 'Event 1', description: 'Something funny happened' },
      // ... other events
    ],
  };

  return (
    <AbsoluteFill>
      <Background />
       <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={200}>
        <Intro />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 40 })}
      />
      <TransitionSeries.Sequence durationInFrames={200}>
          <StatCard title={fakeData.stats.title} value={fakeData.stats.value} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 40 })}
      />
        <TransitionSeries.Sequence durationInFrames={300}>
            <Timeline events={fakeData.timelineEvents} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 40 })}
        />
        
        <TransitionSeries.Sequence durationInFrames={400}>
            <Frame2/>
      </TransitionSeries.Sequence>
    </TransitionSeries>

    
    </AbsoluteFill>
  );
};

