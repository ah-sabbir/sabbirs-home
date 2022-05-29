import {
  Route, Routes
} from "react-router-dom";
import Header from "./components/Header/Header";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

const App = () => {
  return (
    <div className="bg-[#2C3333] w-screen h-screen">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="#about" element={<About/>} />
        <Route path="#projects" element={<Projects/>} />
      </Routes>
    </div>
  );
};

export default App;
