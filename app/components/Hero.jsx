"use client";

import React from "react";
import { Button, Link } from "@nextui-org/react";
import { hero } from "../copys";

export function Hero() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-gray-600">
          <h1 class="title-font sm:text-4xl text-xl mb-4 font-medium font-extrabold">{hero.title}</h1>
          <p class="mb-8 leading-relaxed text-xl">{hero.body}</p>
          <div class="flex justify-center">
          <Button
          href={hero.button.url}
          as={Link}
          color="primary"
          variant="solid"
          size="lg">
          {hero.button.text}
          </Button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
        </div>
      </div>
    </section>
  );
}
