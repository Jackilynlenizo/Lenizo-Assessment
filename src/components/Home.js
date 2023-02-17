import React from "react";
import tanjiro from '../components/assets/tanjiro.png'
import {MdStar} from 'react-icons/md'
import { BsHeartFill } from 'react-icons/bs'
export const Home = () => {
  return (
    <div className="w-full h-screen scrollbar-hide relative">
      <img src={tanjiro} alt='' className='w-full h-full object-cover'/>
      <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black via-transparent to-black'></div>
      
      {/* Middle section */}
      <ul>
        <div className='absolute w-full h-full flex flex-col top-10 justify-center text-left pl-11 text-white '>
              <li className='text-7xl font-bold'>
                  Kimetsu no Yaiba
              </li>
              <ul className='py-4 flex items-center'>  
                  <li className=' px-1'> <div className='text-yellow'> <MdStar/> </div></li>
                  <li className=' text-sm'> 5.0 </li>
                  <li className='text-xs pl-4' >Category: Adventure fiction, Dark fantasy, Martial Arts</li>
              </ul>
              <li className='mr-96 pb-1'>
                  Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by <br/> Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer <br/> after his family was slaughtered and his younger sister Nezuko turned into a demon.
              </li>
              <ul className='flex'>
                  <li className='pr-2' > <button className=' rounded bg-blue-600 p-1 px-2'> Watch Now!</button></li>
                  <li className=' w-9 items-center'><button className='border rounded p-2 flex items-center'> <BsHeartFill/></button> </li>
              </ul>
        </div>
      </ul>

      {/* Hero Slider */}

      
    </div>
  );
};
