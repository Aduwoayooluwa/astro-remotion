import React from 'react';
import "../style/music-player.css"
type Props = {}

const MusicPlayer = (props: Props) => {
  return (
      <div className="watch-container">
    <div className="watch-band-2"></div>
      <div className="watch-face">
        <div className="music-info">
          <p className="text-sm font-semibold">Song title</p>
        </div>
        <button className="play-btn">Play/Pause</button>
      </div>
      <div className="watch-band"></div>
    </div>
  );
}

export default MusicPlayer;
