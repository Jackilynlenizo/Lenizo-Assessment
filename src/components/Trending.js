import React from 'react'
import Card1 from './Card1'

export const Trending = () => {
  return (
  <div className='relative w-full pl-[90px] bg-[#1A1A1A]'>
        <h1 className="font-outfit font-bold text-[34px] text-white flex py-4 gap-2"> Trending <span className=" text-[#FBC94A]">this week </span>
        </h1>

      <div className='relative flex overflow-auto scrollbar-hide'>
        <div className='flex items-center space-x-5'>
            {/* CARDS */}
            <Card1/>
            <Card1/>
            <Card1/>
        </div>
      </div>

  </div>
  )
}
