import{Route, Routes} from 'react-router-dom'
import { About } from './routes/About';
import { Discover } from './routes/Discover';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Navbar } from './layout/Navbar';
import { Signup } from './routes/Signup';

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
      </Routes>
    </div>
  );
}

export default App;
