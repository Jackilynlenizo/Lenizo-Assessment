import React from 'react'
import c1 from '../components/assets/jk.png'
import {MdStar} from 'react-icons/md'

export default function card1() {
  return (
    //CARDS
    <button className='w-[600px] h-[337px] rounded-2xl overflow-hidden relative'>
            <img className='absolute w-full h-full bottom-0 left-0 right-0 bg-cover' src={c1} alt=''/>
            <div className='absolute w-full h-full rounded-2xl bottom-0 left-0 right-0 bg-gradient-to-t from-black'></div>
            
        <div className='absolute text-white text-left z-30 bottom-2 w-full pr-5'> 
                        <div className=' font-outfit font-extrabold text-[24px]'>
                            Attack on Titan
                        </div>
                        <ul className=' font-outfit flex items-center justify-between w-full py-1'>
                            <h1 className ='font-normal text-[12px] '>Category: Adventure fiction, Dark fantasy, Martial Arts </h1>
                            <div className='flex flex-end items-center'>
                            <div> <MdStar color="#FBC94A" size={15} /> </div>
                            <div className=' font-semibold text-[12px]'> 5.0 </div> </div>
                        </ul>
              </div>
    </button>
    
  )
}
