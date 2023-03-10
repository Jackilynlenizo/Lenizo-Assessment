import React from 'react'
import kimetsu from '../assets/kimetsu.png'

export const Hero = () => {
  return (
    <div className='w-full h-screen absolute'>
        <img src={kimetsu} alt='' className='w-full h-screen object-cover'/>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black via-transparent to-black'></div>
    </div>
  )
}
