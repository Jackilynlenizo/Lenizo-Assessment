import React from "react"
import {MdStar} from 'react-icons/md'
import { BsHeartFill, BsPlayFill } from 'react-icons/bs'
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div className=" w-full h-screen bg-neutral-900">
      <Hero/>

      {/* Middle section */}
      <ul>
        <div className=' max-w-[1100px] absolute w-full h-full flex flex-col justify-center text-left top-11 pl-11 text-white'>
              <div className='font-outfit text-8xl font-bold'>
                  Kimetsu no Yaiba
              </div>
              <ul className=' py-4 flex items-center'>  
                  <div className=' px-1'> <div className='text-yellow'> <MdStar color="yellow" size={20} /> </div></div>
                  <div className=' text-sm'> 5.0 </div>
                  <div className='text-xs pl-4' >Category: Adventure fiction, Dark fantasy, Martial Arts</div>
              </ul>
              <p className=' font-outfit mr-96 pb-1 ite'>
                  Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by
                   Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer
                   after his family was slaughtered and his younger sister Nezuko turned into a demon.
              </p>
              <ul className='flex'>
                  <div className='pr-2 ' > <button className=' bg-blue-600'> <BsPlayFill/> Watch Now!</button></div>
                  <div className=' items-center'><button className=' border py-2 px-3'> <BsHeartFill size={23}/></button> </div>
              </ul>
        </div>
      </ul>
      

      
    </div>
  );
};
