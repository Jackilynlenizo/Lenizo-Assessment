import React from "react"
import { Hero } from "./Hero";
import { BannerInfo } from "./BannerInfo";
import { Trending } from "./Trending";
import { Throwback } from "./Throwback";

export const Home = () => {
  return (
    <div className=" w-full h-screen relative bg-cover">
      <Hero/>
      <BannerInfo/>
      <Trending/>
      <Throwback/> 
    </div>
  );
};
