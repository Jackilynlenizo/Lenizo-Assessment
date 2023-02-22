import React from 'react'
import {Expand1} from './Expand1'
import {Expand2} from './Expand2'

export const Trending = () => {
  return (
  <div className='relative w-full bgcolor pb-5'>
        <h1 className="font-outfit font-bold text-[34px] pl-[90px] text-white flex py-4 gap-2"> Trending <span className=" text-[#FBC94A]">this week </span></h1>

        <div className='flex items-center space-x-5 overflow-auto scrollbar-hide px-[90px] scroll-pl-[90px] snap-x'>
                {/* CARDS */}
                <Expand1/>
                <Expand2/>
                <Expand1/>
         </div>

  </div>
  )
}
