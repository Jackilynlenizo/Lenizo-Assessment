import React from 'react'
import kimetsu from '../components/assets/kimetsu.png'
import {NavLink} from 'react-router-dom'

export const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img src={kimetsu} alt='' className='w-full h-screen object-cover'/>
        <div className='absolute z-10 text-white bottom-9 pl-11'>
        <ul className='font-outfit font flex items-center md:space-x-1 py-2 pr-12'>
            <li className='  cursor-pointer'><NavLink to='/'>Overview</NavLink></li>
            <li className=' px-4 cursor-pointer'><NavLink to='/'>Episodes</NavLink></li>
            <li className='  cursor-pointer'><NavLink to='/'>Details</NavLink></li>
        </ul>
        </div>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black via-transparent to-black'></div>
    </div>
  )
}
