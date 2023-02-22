import React from "react"
import { Hero } from "./Hero";
import { BannerInfo } from "./BannerInfo";
import { Trending } from "./Trending";

export const Home = () => {
  return (
    <div className=" w-full h-screen relative">
      <Hero/>
      <BannerInfo/>
      <Trending/>
    </div>
  );
};
