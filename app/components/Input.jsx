'use client'

import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Input({ value, valueHandler, submitHandler }) {
    const inputRef = useRef(null);

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }, [value]);

  return (
    <form onSubmit={submitHandler} className="p-4 flex items-center justify-center gap-2">
        <label className="w-52 md:w-96 xl:w-4/12">
          <input 
            ref={inputRef}
            className=" min-h-[50px] border border-gray-300 rounded w-full bg-white px-2 py-1 resize-none overflow-hidden outline-none"
            value={value} 
            onChange={valueHandler} 
          />
        </label>
        
        <button type="submit" className="bg-blue-500 p-1 rounded-lg mb-2 self-end">
          <Image src="/send.svg" alt="send message" width="24" height="24" />
        </button>
      </form>
  );
}
