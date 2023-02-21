import React from 'react'
import tb1 from "../components/assets/tb1.png";
import tb2 from "../components/assets/tb2.png";
import tb3 from "../components/assets/tb3.png";

export const Throwback = () => {
  return (
        <div className=' pb-10 px-[90px] py-[10px] relative bgcolor'>
            <h1 className=" font-outfit font-bold text-[34px] py-3 text-white">
            Throwback Anime!
          </h1>

          <div className="py-4 flex flex-col items-center">
            <div className=" grid lg:grid-cols-3 align-middle">
              <img src={tb2} alt="" className='p-3 w-[480px]'/>
              <img src={tb3} alt="" className='p-3 w-[480px]'/>
              <img src={tb1} alt="" className='p-3 w-[480px]'/>
            </div>
          </div>
        </div>
  )
}
