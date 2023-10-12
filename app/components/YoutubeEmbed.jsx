import React from 'react';

const YouTubeEmbed = ({ videoURL }) => {
  return (
    <iframe
      width="560"
      height="315"
      src={videoURL}
      title={`YouTube video player`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YouTubeEmbed;
