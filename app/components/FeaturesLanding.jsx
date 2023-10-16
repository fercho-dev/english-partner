import React from "react";
import { featuresLandingTitle, featuresLanding } from "../copys";
import { FeatureLanding } from "./FeatureLanding";

export function Features() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">{featuresLandingTitle.title}</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{featuresLandingTitle.body}</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {featuresLanding.map((feature, index) => (
            <FeatureLanding
              key={index}
              title={feature.title}
              body={feature.body}
              src={feature.src}
              link={feature.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
