"use client";

import React from "react";
import { Link, Image } from "@nextui-org/react";

export function FeatureLanding({title, body, src, link}) {
  return (
    <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
              <Image fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24"
              width={50}
              alt="NextUI hero Image"
              src={src}
              className="min-w-[50px]"
            />
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
              <p class="leading-relaxed text-base">{body}</p>
              <Link
              class="mt-3 text-blue-500 inline-flex items-center"
              href={link?.url}>
                {link?.text}
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
  );
}
