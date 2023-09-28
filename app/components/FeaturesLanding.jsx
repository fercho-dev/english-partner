import React from "react";
import { featuresLandingTitle, featuresLanding } from "../copys";
import { FeatureLanding } from "./FeatureLanding";

export function Features() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{featuresLandingTitle.title}</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{featuresLandingTitle.body}</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {featuresLanding.map((feature, index) => (
          <FeatureLanding
            key={index}
            title={feature.title}
            body={feature.body}
            src = {feature.src}
            link={feature.link}
          />
          ))}
        </div>
      </div>
    </section>
  );
}
