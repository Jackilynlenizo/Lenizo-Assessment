import React, {useState} from "react"
import { NavLink } from "react-router-dom"
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export const Navbar = () => {
  const[nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <nav className='flex absolute w-full items-center justify-between z-30 pt-[70px] px-[90px] mx-auto text-white'>
         <div className="">
            <NavLink to='/'> <h1 className =' font-outfit font-bold text-2xl cursor-pointer'> AnimeBinge </h1> </NavLink>
         </div>
        <ul className=' hidden md:flex font-montserrat font-normal items-center  md:space-x-1'>
            <li className=' px-5 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/'> Home </NavLink></li>
            <li className=' px-5 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/discover'> Discover </NavLink></li>
            <li className=' px-5 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/about'> About Us </NavLink></li>
            <li className='px-2'>
              <NavLink to='/signup'><button className='border bg-transparent px-6 hover:bg-white hover:text-[#106580]'> Sign Up </button></NavLink>
            </li>
            <li>
              <NavLink to='/login'><button className='bg-[#106580] px-4 hover:bg-white hover:text-[#106580]'>Log in</button></NavLink>
            </li>
        </ul>
        
        <div onClick={handleNav} className=" block md:hidden mr-0 z-10 ml-auto">
                {!nav ? <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? ' absolute top-0 left-0 w-full bg-black rounded-b-3xl' : 'fixed hidden'}>
          <div>
              <h1 className =' font-outfit font-bold text-2xl cursor-pointer pt-[70px] px-[90px]'> AnimeBinge </h1>
          </div>

          <ul className=" px-[90px] pt-4">
            <li className=' py-6 border-b border-gray-900 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/'> Home </NavLink></li>
            <li className=' py-6 border-b border-gray-900 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/discover'> Discover </NavLink></li>
            <li className=' py-6 border-b border-gray-900 cursor-pointer hover:font-bold hover:underline-offset-8 hover:underline hover:decoration-4 hover:decoration-[#106580]'><NavLink to='/about'> About Us </NavLink></li>
            <div className="flex items-center justify-center px-6 py-5"> 
            <li className='p-2'>
              <button className='border bg-transparent px-6 hover:bg-white hover:text-[#106580]'> Sign Up </button>
            </li>
            <li className="p-2">
              <button className='bg-[#106580] px-6 hover:bg-white hover:text-[#106580]'>Log In</button>
            </li> </div>
          </ul>
        </div>
    </nav>
  )
}
