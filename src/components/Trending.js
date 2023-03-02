import React from 'react'
import {MdStar} from 'react-icons/md'
// import { easeInOut } from 'framer-motion'

export const Trending = (props) => {
   
  return (
  <div  className='w-[600px] h-[337px] snap-start rounded-2xl z-10 overflow-hidden relative hover:shadow-[0_5px_10px_1px_rgba(196,196,196,0.4)] hover:duration-300 hover:ease-out'>
    <img className='absolute w-full h-full bottom-0 left-0 right-0 bg-cover' src={`../CardImages/${props.img}`} alt=''/>
    <div className='absolute w-full h-full rounded-2xl bottom-0 left-0 right-0 bg-gradient-to-t from-black'></div>
    
    <div className='absolute text-white text-left z-30 bottom-2 w-full px-5 border-white'> 
                <div className=' font-outfit font-extrabold text-[24px]'>
                    {props.title}
                </div>
                <ul className=' font-outfit flex items-center justify-between w-full py-1'>
                    <h1 className ='font-normal text-[12px] '>Category: {props.category}  </h1>
                    <div className='flex flex-end items-center'>
                        <div> <MdStar color="#FBC94A" size={15} /> </div>
                        <div className=' font-semibold text-[12px]'> {props.rate} </div> 
                    </div>
                </ul>
      </div>
</div>
  )
}
