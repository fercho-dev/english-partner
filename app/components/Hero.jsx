"use client";

import React from "react";
import { Button, Link } from "@nextui-org/react";
import { hero } from "../copys";
import Image from "next/image";

export function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-gray-600">
          <h1 className="title-font sm:text-4xl text-xl mb-4 font-extrabold">{hero.title}</h1>
          <p className="mb-8 leading-relaxed text-xl">{hero.body}</p>

          <div className="flex justify-center">
            <Button
              href={hero.button.url}
              as={Link}
              color="primary"
              variant="solid"
              size="lg"
            >
              {hero.button.text}
            </Button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/english-partner.png"
            alt="english partner"
            width={500}
            height={500}
          />
        </div>

      </div>
    </section>
  );
}
