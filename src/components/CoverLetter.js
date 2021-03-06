import React from 'react';
import ReactPlayer from 'react-player';
import './CoverLetter.scss';

const CoverLetter = () => {
  return (
    <section id="cover-letter">
      <ReactPlayer
        className="video"
        url="https://www.youtube.com/watch?v=ubSpgjF0knQ"
        controls={true}
        // fullscreen={true}
        resizemode="cover"
      />
    </section>
  )
}

export default CoverLetter;