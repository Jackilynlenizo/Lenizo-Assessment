import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='flex absolute w-full items-center justify-between py-8 px-5'>
         <div>
            <Link to='/'> <h1 className ='font-bold text-2xl cursor-pointer pl-11'> AnimeBinge </h1> </Link>
         </div>
        <ul className='flex items-center md:space-x-1 py-2 pr-12'>
            <li className=' px-8 cursor-pointer'><NavLink to='/'> Home </NavLink></li>
            <li className=' px-6 cursor-pointer'><NavLink to='/discover'> Discover </NavLink></li>
            <li className=' px-6 cursor-pointer'><NavLink to='/about'> About Us </NavLink></li>
            <div className='px-2'>
              <Link to='/login'><button className='border px-6 py-2 rounded cursor-pointer'> Log in </button></Link>
            </div>
            <div>
              <Link to='/signup'><button className='bg-blue-600 pr-4 px-6 py-2 rounded cursor-pointer'> Sign Up </button></Link>
            </div>
        </ul>
    </div>
  )
}
