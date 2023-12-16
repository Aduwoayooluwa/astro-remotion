import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@remotion/player';
// import Wrap from "../../remotion/Wrap"

import { Wrap } from './Wrap';

const RenderPage = () => {

  // Function to handle the download of the video
  const handleDownload = () => {
    // Implement video download logic
  };

  // Function to handle sharing the video
  const handleShare = () => {
    // Implement video sharing logic
  };

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-3xl font-bold mb-4">Your Year in Wrap</h1>
        <p className="mb-8">A personalized journey through your 2023.</p>

        <div className="video-wrapper mb-8">
          <Player
                component={Wrap}
                durationInFrames={120}
                compositionWidth={1920}
                compositionHeight={1080}
                fps={30}
                // renderFullscreenButton={renderFullscreenButton}
                />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleDownload}
        >
          Download
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handleShare}
        >
          Share
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RenderPage;
