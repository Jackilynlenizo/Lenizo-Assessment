import React from "react";
import tb1 from "../components/assets/tb1.png";
import tb2 from "../components/assets/tb2.png";
import tb3 from "../components/assets/tb3.png";
import { Carousel } from "../components/Carousel";
import img1 from "../components/assets/img1.png";
import img2 from "../components/assets/img2.png";
import img3 from "../components/assets/img3.png";

export const Discover = () => {
  return (
    <div className=" bg-neutral-900 w-full ">
      <div className=" font-outfit font-normal text-5xl flex py-4 px-11">
        <h1 className="text-white">
          Trending <span className="text-yellow-500"> this week </span>
        </h1>
      </div>

      {/* Carousel */}
      <div className="flex gap-12 overflow-x-auto overflow-hidden px-11 scrollbar-hide h-64">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img className=" rounded-2xl bg-gradient-to-t from-black via-transparent to-black" src={img3} alt="" />
          {/* <div className=' absolute w-full h-full top-0 left-0 z-50 bg-gradient-to-t from-black'></div> */}
        </div>
      </div>

      {/* LOWER */}
      <h1 className=" font-outfit font-normal text-5xl py-3 px-11 text-white">
        {" "}
        Throwback Anime!{" "}
      </h1>
      <div className="py-4 flex flex-col items-center">
        <div className=" grid lg:grid-cols-3 gap-20 ">
          <img src={tb1} alt="" className="" />
          <img src={tb2} alt="" className="" />
          <img src={tb3} alt="" />
        </div>
      </div>
    </div>
  );
};
