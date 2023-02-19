import React from 'react'
import img1 from '../components/assets/img1.png'
import img2 from '../components/assets/img2.png'
import img3 from '../components/assets/img3.png'

export const Carousel = () => {
  return (
    <div className='relative flex items-center'>
        <div className=' max-h-20 border rounded-md '>
        <img src={img1} alt=''> </img>
        <img src={img2} alt=''> </img>
        <img src={img3} alt=''> </img>
        </div>
    </div>
  )
}
