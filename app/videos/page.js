'use client'

import React, { useState } from "react";
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import YouTubeEmbed from '../components/YouTubeEmbed'

function Videos() {
  const [inputValue, setInputValue] = useState('');
  const [videos, setVideos] = useState([]);

  const valueHandler = (event) => {
    setInputValue(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setVideos([]);
    const response = await fetch(
      `/api/youtube?keyword=${encodeURIComponent(inputValue)}`
    );
    const vids = await response.json();
    setVideos(vids);
  };

  return <div>
    <Header />
    <Input value={inputValue} valueHandler={valueHandler} submitHandler={submitHandler} />
    <section className="flex flex-col justify-center items-center">
      {videos.map((vid, index) => {
        return (
          <div className='my-4' key={index}>
            <YouTubeEmbed videoURL={vid.videoURL} />
          </div>
        )
      })}
    </section>
  </div>
}

export default Videos;
