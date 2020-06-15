import React from 'react';
import ReactPlayer from 'react-player';

const CoverLetter = () => {
  return (
    <section id="cover-letter">
      <ReactPlayer
        className="video"
        url="https://www.youtube.com/watch?v=IzQT6dtnvt0"
        controls={true}
        fullscreen={true}
        resizeMode="cover"
      />
    </section>
  )
}

export default CoverLetter;