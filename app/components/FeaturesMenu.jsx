import React from "react";
import { CardComponent } from "./Card.jsx";
import { features } from "../copys";

export function FeaturesMenu() {
  return (
    <section className="px-4 py-8">
      <p className="text-2xl text-center">¿Qué quieres prácticar hoy?</p>
      <div className="my-6 mx-auto flex flex-col gap-6 md:grid md:grid-cols-3 md:max-w-screen-xl">
        {features.map((feature, index) => (
          <CardComponent
            key={index}
            title={feature.title}
            body={feature.body}
            button={feature.button}
          />
        ))}
      </div>
    </section>
  );
}
