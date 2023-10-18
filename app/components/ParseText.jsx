import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';
import parse from 'html-react-parser';

const ParseText = ({ text }) => {
  const youtubeRegex = /\[.*?\]\((https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11})\)/g;
  //const videoTitleRegex = /Title: "(.*)"/g;

  //const titles = [...text.matchAll(videoTitleRegex)].map(match => match[1]);
  const urls = [...text.matchAll(youtubeRegex)].map(match => match[1]);

  if(urls.length === 0) {
    return <p>{parse(text)}</p>;
  }

  // Eliminando las URLs del texto original
  const newText = text.replace(youtubeRegex, '');

  const videoElements = urls.map((url, index) => (
    <div className='my-4' key={url}>
      <YouTubeEmbed videoURL={url} />
    </div>
  ));

  return <div>
    <p>{parse(newText)}</p>
    {videoElements}
  </div>;
};

export default ParseText;
