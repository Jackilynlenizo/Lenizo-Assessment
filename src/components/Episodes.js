import React from 'react'
import img from '../components/assets/aot.png'
import img1 from '../components/assets/img1.png'
// import img2 from '../components/assets/img2.png'
import img3 from '../components/assets/img3.png'
// import img4 from '../components/assets/img4.png'
import img5 from '../components/assets/img5.png'
// import img6 from '../components/assets/img6.png'
import {MdStar} from 'react-icons/md'

export const Episodes = () => {

  return (
<div className=' pr-7 pb-5 z-50 bgcolor'>
    <div className=' flex w-[1430px]'>
        <div>
                <button className='w-[600px] h-[621px] rounded-2xl relative '>
                        <img className='absolute w-full h-full bottom-0 left-0 right-0 rounded-2xl object-cover' src={img} alt=''/>
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
                <div className='w-[600px] text-white flex content-center items-center py-2'>
                    <p className='px-4 text-justify'>
                    When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…
                    </p>
                </div>
        </div>

        <div>
        <div className='text-white overflow-auto  p-2 pt-1'>
            <div className='font-outfit font-medium text-[24px] px-3 flex items-center justify-between'>
                <h1> Episodes</h1>
                <h1> Season 1</h1>
            </div>

            <div className='flex  items-center px-3 py-5'>
                <div className='rounded-2xl relative'>
                    <div className='w-[448px] h-[252px]'><img className='absolute w-full h-full rounded-2xl object-cover' src={img1} alt=''/></div>
                </div>

                <div className='  font-outfit font-medium text-[20px] px-2 items-left'>
                    <h1 className='left-0'>Episode 1</h1>
                    <p className='text-[#747474]'>The citizens worry they will be at the Titans' mercy after many years of peace.</p>
                </div>
            </div>

            <div className='flex items-center  px-3 py-5'>
            <div className='rounded-2xl relative'>
                    <div className='w-[448px] h-[252px]'><img className='absolute w-full h-full rounded-2xl object-cover' src={img3} alt=''/></div>
                </div>

                <div className='  font-outfit font-medium text-[20px] px-2 items-left'>
                    <h1 className='left-0'>Episode 2</h1>
                    <p className='text-[#747474]'>The Shiganshina citizens are under attack from the Titans.</p>
                </div>
            </div>
            <div className='flex items-center  px-3 py-5'>
            <div className='rounded-2xl relative'>
                    <div className='w-[448px] h-[252px]'><img className='absolute w-full h-full rounded-2xl object-cover' src={img5} alt=''/></div>
                </div>

                <div className='  font-outfit font-medium text-[20px] px-2 items-left'>
                    <h1 className='left-0'>Episode 3</h1>
                    <p className='text-[#747474]'>Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.</p>
                </div>
            </div>

            
        </div>
        </div>

    </div>
    </div>
  )
}
