import React from "react";
import { Card } from "./Card";
import CardData from "./CardData";
import { Throwback } from "./Throwback";

export const Trending = () => {
  const carddata = CardData.map((item) => {
    return (
      <Card
        id={item.id}
        img={item.img}
        title={item.title}
        rate={item.rate}
        category={item.category}
      />
    );
  });

  return (
    <div className="relative z-0 top-0 bgcolor pb-5 h-inherit">
      <h1 className="font-outfit font-bold text-[34px] pl-[90px] text-white flex py-4 gap-2">
        Trending <span className=" text-[#FBC94A]">this week </span>
      </h1>

      <div className="flex flex-nowrap z-0 items-center space-x-5 overflow-x-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x">
           {carddata}
      </div>

      <Throwback/>   
    </div>
  );
};
