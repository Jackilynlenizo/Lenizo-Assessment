import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trending } from "./Trending";
import TrendingData from "../data/TrendingData";
import { Throwback } from "./Throwback";
import ThrowbackData from "../data/ThrowbackData";
import slugify from "react-slugify";
import { motion } from "framer-motion";

export const HomeContent = () => {
  const [trSearch, setTrSearch] = useState("")
  const [tbSearch, setTbSearch] = useState("")

  const trendingdata = TrendingData.filter((item) => {
    return trSearch.toLowerCase() === "" ? item: item.title.toLowerCase().includes(trSearch.toLowerCase())
  }).map((item) => { 
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

  const tbdata = ThrowbackData.filter((item) => {
    return tbSearch.toLowerCase() === "" ? item: item.title.toLowerCase().includes(tbSearch.toLowerCase())
  }).map((item) => {
    return (
      <Throwback
        id={item.id}
        img={item.img}
        title={item.title}
        alt={item.alt}
      />
    );
  });

  return (
    <div className="relative top-0 bgcolor pb-5">
      <div className="md:flex justify-between items-center px-[90px] pb-2">
        <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold text-[34px] text-white flex py-4 gap-2">
          Trending <span className=" text-[#FBC94A]">this week </span>
        </motion.h1>
        <input type="search" placeholder="Search Anime..." className="rounded-md pl-4" onChange={(e) => setTrSearch(e.target.value) }/>
      </div>

        <div className="flex flex-nowrap items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] py-4 scroll-pl-[90px] snap-x">
           {trendingdata}
        </div>

      <div className=' pb-10 relative bgcolor'>
          <div className="md:flex justify-between items-center px-[90px] pb-2">
            <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold text-[34px] py-3 text-white">
              Throwback Anime!
            </motion.h1>
            <input type="search" placeholder="Search Anime..." className="rounded-md pl-4" onChange={(e) => setTbSearch(e.target.value) }/>
          </div>

          <div className="flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x">
                {tbdata}
          </div>
      </div>
    </div>
  );
};
