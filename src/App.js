import{Route, Routes} from 'react-router-dom'
import { About } from './components/About';
import { Discover } from './components/Discover';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
 
function App() {
  return (
    <div className='relative'>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='about' element={<About/>}> </Route>
          <Route path='discover' element={<Discover/>}> </Route>
          <Route path='signup' element={<Signup/>}> </Route>
          <Route path='login' element={<Login/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
