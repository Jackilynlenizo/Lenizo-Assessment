import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
         <nav>
        <Link to='/'> AnimeBinge </Link>
        <ul>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/discover'> Discover </Link></li>
            <li><Link to='/about'> About Us </Link></li>
            <li><button><Link to='/login'> Log in </Link></button></li>
            <li><button><Link to='/signup'> Sign Up </Link></button></li>
        </ul>
    </nav>
    </div>
  )
}
