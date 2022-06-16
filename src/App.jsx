import {
  Route, Routes
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#24253F] to-[#2C2B30]  w-screen h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
};

export default App;
