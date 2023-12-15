import React from 'react';
import { AbsoluteFill } from 'remotion';
import { fontFamily } from '../remotion/Intro';
import './styles/StatCard.css'; 

interface StatCardProps {
  title: string;
  value: number;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <AbsoluteFill style={{
      fontFamily
    }} >
      <section className="stat-card-container">
        <div className="stat-card">
        <h2 className="stat-card-title">{title}</h2>
        <p className="stat-card-value">{value}</p>
      </div>

      <div className="stat-card">
        <h2 className="stat-card-title">{title}</h2>
        <p className="stat-card-value">{value}</p>
      </div>
      </section>
      
    </AbsoluteFill>
  );
};


