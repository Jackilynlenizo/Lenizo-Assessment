import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trending } from "./Trending";
import TrendingData from "../data/TrendingData";
import { Throwback } from "./Throwback";
import ThrowbackData from "../data/ThrowbackData";
import slugify from "react-slugify";
import { motion } from "framer-motion";
import {BiSearchAlt2} from 'react-icons/bi'

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
      <div className="md:flex md:pb-0  justify-between items-center px-[90px]">
        <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold text-[34px] text-white flex md:py-4 pt-4 gap-2">
          Trending <span className=" text-[#FBC94A]">this week </span>
        </motion.h1>
        <form className="md:pb-0 pb-3">
          <BiSearchAlt2 color="#106580" className="absolute z-10 md:inset-y-[29.5px] inset-y-[70.3px] py-1 w-5 h-6 border-r border-[#106580] peer-focus:[#FBC94A]" />
            <input type="search" placeholder="Search Anime..." 
              className="relative peer outline-none rounded-full pl-12 cursor-pointer w-12 h-8 focus:w-52 focus:pl-7 focus:pr-4 " onChange={(e) => setTrSearch(e.target.value) }/>
        </form>
      </div>

        <div className="flex flex-nowrap items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] pb-4 scroll-pl-[90px] snap-x">
           {trendingdata}
        </div>

      <div className=' pb-10 relative bgcolor'>
          <div className="md:flex justify-between items-center px-[90px] pb-2">
            <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold text-[34px] py-3 text-white">
              Throwback Anime!
            </motion.h1>
            <form className="md:pb-0 pb-3">
              <BiSearchAlt2 color="#106580" className="absolute z-10 md:inset-y-[26px] inset-y-[78.3px] py-1 w-5 h-6 border-r border-[#106580] peer-focus:[#FBC94A]" />
              <input type="search" placeholder="Search Anime..." 
                className="relative peer outline-none rounded-full pl-12 cursor-pointer w-12 h-8 focus:w-52 focus:pl-7 focus:pr-4 " onChange={(e) => setTbSearch(e.target.value) }/>
            </form>
          </div>

          <div className="flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x">
                {tbdata}
          </div>
      </div>
    </div>
  );
};
