import React from 'react';
import { AbsoluteFill } from 'remotion';
import { fontFamily } from '../remotion/Intro';
import './styles/Timeline.css';

interface TimelineEvent {
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <AbsoluteFill style={{
      fontFamily
    }} className="timeline-container">
      <ul className="timeline">
        {events.map((event, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-content">
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </AbsoluteFill>
  );
};
