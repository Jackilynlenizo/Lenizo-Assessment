import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='flex absolute z-10 w-full items-center justify-between py-[70px] px-[90px] text-white'>
         <div>
            <Link to='/'> <h1 className =' font-outfit font-bold text-2xl cursor-pointer'> AnimeBinge </h1> </Link>
         </div>
        <ul className=' font-montserrat font-normal flex items-center md:space-x-1 py-2 pr-12'>
            <li className=' px-8 cursor-pointer'><NavLink to='/'> Home </NavLink></li>
            <li className=' px-6 cursor-pointer'><NavLink to='/discover'> Discover </NavLink></li>
            <li className=' px-6 cursor-pointer'><NavLink to='/about'> About Us </NavLink></li>
            <li className='px-2'>
              <Link to='/signup'><button className='border bg-transparent px-6'> Sign Up </button></Link>
            </li>
            <li>
              <Link to='/login'><button className='bg-[#106580] px-6'>Log In</button></Link>
            </li>
        </ul>
    </div>
  )
}
