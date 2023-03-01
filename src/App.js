import{Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import { Discover } from './pages/Discover';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './layout/Navbar';
import { Signup } from './pages/Signup';
import {Anime} from './pages/Anime';

function App() {
  return (
    <div className="relative">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="about" element={<About />}>
          {" "}
        </Route>
        <Route path="discover" element={<Discover />}>
          {" "}
        </Route>
        <Route path="signup" element={<Signup />}>
          {" "}
        </Route>
        <Route path="login" element={<Login />}>
          {" "}
        </Route>
        <Route path=":slug" element={<Anime/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
