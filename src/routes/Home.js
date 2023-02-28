import React from "react";
import {Hero} from "../components/Hero"
import {BannerInfo} from "../components/BannerInfo";
import {Trending} from "../components/Trending";

export const Home = () => {
  return (
    <div className=" w-full h-screen relative">
      <Hero />
      <BannerInfo />
      <Trending />
    </div>
  );
};
