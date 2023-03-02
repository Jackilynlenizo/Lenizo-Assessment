import React from "react";
import { Link } from "react-router-dom";
import { Trending } from "./Trending";
import TrendingData from "../data/TrendingData";
import { Throwback } from "./Throwback";
import ThrowbackData from "../data/ThrowbackData";
import slugify from "react-slugify";

export const HomeContent = () => {
  const trendingdata = TrendingData.map((item) => {
    return (
      <Link to={`${slugify(item.title)}`}><Trending
        key={item.key}
        id={item.key}
        img={item.img}
        title={item.title}
        rate={item.rate}
        category={item.category}
      /></Link>
    );
  });

  const tbdata = ThrowbackData.map((item) => {
    return (
      <Throwback
        id={item.id}
        img={item.img}
        alt={item.alt}
      />
    );
  });

  return (
    <div className="relative top-0 bgcolor pb-5">
      <h1 className="font-outfit font-bold text-[34px] pl-[90px] text-white flex py-4 gap-2">
        Trending <span className=" text-[#FBC94A]">this week </span>
      </h1>

        <div className="flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x">
           {trendingdata}
        </div>

      <div className=' pb-10 py-[10px] relative bgcolor'>
          <h1 className=" px-[90px] font-outfit font-bold text-[34px] py-3 text-white">
            Throwback Anime!
          </h1>

          <div className="flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x">
                {tbdata}
          </div>
      </div>
    </div>
  );
};
