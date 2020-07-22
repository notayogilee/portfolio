import React from 'react';
import ReactPlayer from 'react-player';
import './CoverLetter.scss';

const CoverLetter = () => {
  return (
    <section id="cover-letter">
      <ReactPlayer
        className="video"
        url="https://www.youtube.com/watch?v=Lc-ER_7N4fU"
        controls={true}
        fullscreen={true}
        resizeMode="cover"
      />
    </section>
  )
}

export default CoverLetter;