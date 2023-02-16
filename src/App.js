import{Route, Routes} from 'react-router-dom'
import './App.css';
import { About } from './components/About';
import { Discover } from './components/Discover';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Signup } from './components/Signup';
import {Uppersection} from './components/Uppersection'
function App() {
  return (
    <>
        <Navbar></Navbar>
        {/* <Uppersection></Uppersection> */}
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='about' element={<About/>}> </Route>
        <Route path='discover' element={<Discover/>}> </Route>
        <Route path='signup' element={<Signup/>}> </Route>
        <Route path='login' element={<Login/>}> </Route>
      </Routes>
    </>
  );
}

export default App;
