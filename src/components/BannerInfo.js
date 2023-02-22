import React from 'react'
import {MdStar} from 'react-icons/md'
import { BsHeartFill, BsPlayFill } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

export const BannerInfo = () => {
  return (
    <div className=' absolute w-full h-full justify-center text-left top-[250px] px-[90px] text-white'>
              <div className=' font-outfit text-[80px] font-bold'>
                  Kimetsu no Yaiba
              </div>
              <ul className='flex items-center py-3'>  
                  <div className=' px-1 font-normal'> <div> <MdStar color="#FBC94A" size={20} /> </div></div>
                  <div className=' font-semibold'> 5.0 </div>
                  <div className=' font-normal pl-4' >Category: Adventure fiction, Dark fantasy, Martial Arts</div>
              </ul>

              <div className="">
              <p className='flex max-w-[622px] font-outfit font-normal'>
                  Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by
                   Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer
                   after his family was slaughtered and his younger sister Nezuko turned into a demon.
              </p>

              </div>

              <ul className='flex py-2'>
                  <div className='pr-2' > <button className=' bg-[#106580]  font-normal font-montserrat'> <BsPlayFill/> Watch Now!</button></div>
                  <div className=' items-center'><button className=' border py-2 px-3'> <BsHeartFill size={23}/></button> </div>
              </ul>

              <div className=' z-30 text-white mt-24'>
                <ul className='font-outfit font-thin flex items-center space-x-5 pr-12 cursor-pointer'>
                  <li className='hover:font-bold hover:underline-offset-8 hover:underline z-30 hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/'>Overview</NavLink></li>
                  <li className='hover:font-bold hover:underline-offset-8 hover:underline z-30 hover:decoration-4 hover:decoration-[#106580] px-4'><NavLink to='/'>Episodes</NavLink></li>
                  <li className='hover:font-bold hover:underline-offset-8 hover:underline z-30 hover:decoration-4 hover:decoration-[#106580] '><NavLink to='/'>Details</NavLink></li>
                </ul>
              </div>
        </div>
  )
}
