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
      <div className="lg:flex lg:pb-0  justify-between items-center lg:px-[5.625rem] px-[1.5rem]">
        <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold lg:text-3xl text-lg text-white flex lg:py-4 pt-4 gap-2">
          Trending <span className=" text-[#FBC94A]">this week </span>
        </motion.h1>
        <form className="lg:pb-0 pb-3">
          <BiSearchAlt2 color="#106580" className="absolute z-10 lg:inset-y-[1.388rem] inset-y-[3rem] py-1 w-5 h-6 border-r border-[#106580] peer-focus:[#FBC94A]" />
            <input type="search" placeholder="Search Anime..." 
              className="relative peer outline-none rounded-full pl-12 cursor-pointer w-12 h-8 focus:w-52 focus:pl-7 focus:pr-4 " onChange={(e) => setTrSearch(e.target.value) }/>
        </form>
      </div>

        <div className="lg:h-[22.3rem] h-[13.7rem] flex flex-nowrap items-center space-x-5 overflow-x-auto scrollbar-hide lg:px-[5.625rem] px-[1.5rem] pb-4 scroll-pl-[5.625rem] snap-x">
           {trendingdata}
        </div>

      <div className=' pb-10 relative bgcolor'>
          <div className="lg:flex justify-between items-center lg:px-[5.625rem] px-[1.5rem] pb-2">
            <motion.h1 whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="font-outfit font-bold lg:text-3xl text-lg py-3 text-white">
              Throwback Anime!
            </motion.h1>
            <form className="lg:pb-0 pb-3">
              <BiSearchAlt2 color="#106580" className="absolute z-10 lg:inset-y-[1.189rem] inset-y-[3.5rem] py-1 w-5 h-6 border-r border-[#106580] peer-focus:[#FBC94A]" />
              <input type="search" placeholder="Search Anime..." 
                className="relative peer outline-none rounded-full pl-12 cursor-pointer w-12 h-8 focus:w-52 focus:pl-7 focus:pr-4 " onChange={(e) => setTbSearch(e.target.value) }/>
            </form>
          </div>

          <div className=" lg:h-[26.688rem] h-[15.938rem] flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide lg:px-[5.625rem] px-[1.5rem] scroll-pl-[5.625rem] snap-x">
                {tbdata}
          </div>
      </div>
    </div>
  );
};
