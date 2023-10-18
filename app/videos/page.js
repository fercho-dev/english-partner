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

  const loadMoreVideos = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `/api/youtube?keyword=${encodeURIComponent(inputValue)}&maxResults=${videos.length + 3}`
    );
    const vids = await response.json();
    setVideos(vids);
  };

  return <div>
    <Header />
    <p className="mt-6 text-center">
      Utiliza YouTube para mejorar tu inglés. <br /> Busca un tema y mira los videos más relevantes.
    </p>
    <Input value={inputValue} valueHandler={valueHandler} submitHandler={submitHandler} />
    <section className="flex flex-col justify-center items-center">
      {videos.map((vid, index) => {
        return (
          <div className='my-4' key={index}>
            <YouTubeEmbed videoURL={vid.videoURL} />
          </div>
        )
      })}
      {
        videos.length > 0 && <button onClick={loadMoreVideos} className="mt-8 mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Cargar más videos
        </button>
      }
    </section>
  </div>
}

export default Videos;
