import React from "react";
import { Trending } from "./Trending";
import { Throwback } from "./Throwback";

export const Discover = () => {
  return (
      <div className ='bg-slate-600'>
        <Trending/>
        <Throwback/>
    </div>
  );
};
