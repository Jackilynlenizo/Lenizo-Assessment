import React from 'react'
import {Expand} from './Expand'

export const Trending = () => {
  return (
  <div className='relative w-full pl-[90px] bgcolor pb-5'>
        <h1 className="font-outfit font-bold text-[34px] text-white flex py-4 gap-2"> Trending <span className=" text-[#FBC94A]">this week </span></h1>

        <div className='flex overflow-auto scrollbar-hide'>
            <div className='flex items-center space-x-5'>
                {/* CARDS */}
                <Expand/>
                <Expand/>
                <Expand/>
            </div>
        </div>

  </div>
  )
}