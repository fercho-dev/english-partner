'use-client';

import React from "react";

import { Header } from "/app/components/Header";
import { Hero } from "/app/components/Hero";
import { Features } from "/app/components/FeaturesLanding";
import { Footer } from "/app/components/Footer";

function LandingPage() {
  return <>
    <Header />
    <Hero />
    <Features />
    <Footer />
  </>
}

export default LandingPage;
