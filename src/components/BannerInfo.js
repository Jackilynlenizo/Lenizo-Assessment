import React from 'react'
import {MdStar} from 'react-icons/md'
import { BsHeartFill, BsPlayFill } from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';

export const BannerInfo = () => {

  
  return (
    <div className=' flex flex-col w-full h-[100vh] md:px-[90px] px-[60px] pt-[113px] relative'>
        <div className=' w-full h-screen justify-center text-left flex flex-col text-white'>
                  <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]}} 
                  className=' font-outfit text-[70px] font-bold'>
                      Kimetsu no Yaiba
                  </motion.div>

                  <motion.ul 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]}}
                  className='flex items-center pb-2'>  
                      <div className=' px-1 font-normal'> <div> <MdStar color="#FBC94A" size={20} /> </div></div>
                      <div className=' font-semibold'> 5.0 </div>
                      <div className=' font-normal pl-4' >Category: Adventure fiction, Dark fantasy, Martial Arts</div>
                  </motion.ul>

                  <motion.p 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    className='flex max-w-[622px] font-outfit font-normal'>
                      Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by
                      Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer
                      after his family was slaughtered and his younger sister Nezuko turned into a demon.
                  </motion.p>

                  <motion.ul 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    className='flex py-2'>
                      <div className='pr-2' > <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className=' bg-[#106580] font-normal font-montserrat hover:bg-white hover:text-[#106580]'> <BsPlayFill/> Watch Now!</motion.button ></div>
                      <div className=' items-center'><motion.button whileHover={{scale:1.1}} whileTap={{scale:0.9}} className=' border py-2 px-3'> <BsHeartFill size={23}/></motion.button > </div>
                  </motion.ul>
            </div>

            <div className='text-white mb-10'>
                    <ul className='font-outfit font-thin flex items-center space-x-5 pr-12 cursor-pointer'>
                      <li className='hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/'>Overview</NavLink></li>
                      <li className='hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580] px-4'><NavLink to='/'>Episodes</NavLink></li>
                      <li className='hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580] '><NavLink to='/'>Details</NavLink></li>
                    </ul>
            </div>

        </div>
  )
}
