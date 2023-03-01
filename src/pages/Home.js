import React from "react";
import {Hero} from "../components/Hero"
import {BannerInfo} from "../components/BannerInfo";
import {HomeContent} from "../components/HomeContent";

export const Home = () => {
  return (
    <div className=" w-full h-screen relative">
      <Hero />
      <BannerInfo />
      <HomeContent />
    </div>
  );
};
