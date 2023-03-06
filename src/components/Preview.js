import React, { useEffect, useState } from "react";
//import img1 from "../assets/img1.png";
//import img3 from "../assets/img3.png";
//import img5 from "../assets/img5.png";
import { MdStar } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TrendingData from "../data/TrendingData";
import EpisodeData from "../data/EpisodeData";
import { EpisodeDesc } from "./EpisodeDesc";
import slugify from "react-slugify";
// import {AiOutlineClose, } from "react-icons/ai"

export const Preview = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const epdata = EpisodeData.map((item) => {
    return (
      <EpisodeDesc
        ep={item.ep}
        epimg={item.epimg}
        epdesc={item.epdesc}
      />
    );
  });

//   console.log(slug);
  const [anime, setAnime] = useState();

  useEffect(() => {
    setAnime(TrendingData.find((data) => slugify(data.title) === slug));
    console.log(TrendingData.find((data) => data.title === slug));
  }, [slug]);

  return (
    <div className=" px-[90px] pr-7 pb-5  overflow-x-hidden ">
      <button className=" cursor-pointer font-outfit font-bold text-[34px] text-white flex py-4 gap-2">
        Trending <span className=" text-[#FBC94A]">this week </span>
      </button>

      <div className=" xl:flex ">
        <div className=" flex-shrink-0 flex xl:flex-col px-2 items-center">
          <button onClick={() => navigate("/")} className="rounded-2xl relative xl:w-[600px] xl:h-[621px] w-[2000px] h-[421px]">
            <img
              className="absolute w-full h-full bottom-0 left-0 rounded-2xl object-cover"
              src={anime?.img}
              alt=""/>
            <div className="absolute w-full h-full rounded-2xl bottom-0 left-0 right-0 bg-gradient-to-t from-black"></div>

            <div className="absolute text-white text-left z-30 bottom-2 w-full px-5">
              <div className=" font-outfit font-extrabold text-[24px]">
                {anime?.title}
              </div>
              <ul className=" font-outfit xl:flex items-center justify-between w-full py-1">
                <h1 className="font-normal text-[12px] ">{anime?.category}</h1>
                <div className="flex flex-end items-center">
                  <div>
                    <MdStar color="#FBC94A" size={15} />
                  </div>
                  <div className=" font-semibold text-[12px]">
                    {anime?.rate}
                  </div>
                </div>
              </ul>
            </div>
          </button>

          <div className="xl:w-[600px] text-white flex content-center items-center pl-3 py-2">
            <p className="text-[#747474] text-justify">{anime?.description}</p>
          </div>
        </div>

        <div className="text-white md:h-screen overflow-auto w-full scrollbar-default p-2 pt-1">
          <div className="font-outfit font-medium text-[24px] flex items-center justify-between">
            <h1> Episodes</h1>
            <h1> Season {anime?.season}</h1>
          </div>
          {epdata}   
        </div>
        
      </div>
    </div>
  );
};
