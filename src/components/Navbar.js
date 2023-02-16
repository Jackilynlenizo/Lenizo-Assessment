import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='flex absolute w-full items-center justify-between py-8 px-5 bg-black text-white'>
         <Link to='/'> <h1 className ='font-bold text-2xl cursor-pointer pl-4'> AnimeBinge </h1> </Link>
        <div className='flex items-center md:space-x-1 px-6'>
            <div className='px-2'>
              <button className=' px-6 py-2 rounded cursor-pointer'><Link to='/'> Home </Link></button>
            </div>
            <div>
            <button className=' px-6 py-2 rounded cursor-pointer'><Link to='/discover'> Discover </Link></button>
            </div>
            <div>
            <button className=' px-6 py-2 rounded cursor-pointer'><Link to='/about'> About Us </Link></button>
            </div>
            <div className='px-3'>
            <Link to='/login'><button className='border px-6 py-2 rounded cursor-pointer'> Log in </button></Link>
            </div>
            <div className = 'pr-4'>
            <Link to='/signup'><button className='bg-blue-600 px-6 py-2 rounded cursor-pointer'> Sign Up </button></Link>
            </div>
        </div>
    </div>
  )
}
