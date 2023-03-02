import{Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import { Discover } from './pages/Discover';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './layout/Navbar';
import { Signup } from './pages/Signup';
import {Anime} from './pages/Anime';
// import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="discover" element={<Discover />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="login" element={<Login />}/>
        {/* <Route path="*" element ={<NoMatch/>} /> */}
        <Route path=":slug" element={<Anime/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
