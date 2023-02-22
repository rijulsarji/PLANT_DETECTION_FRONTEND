import './App.css';
import Image from './pages/Image.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import  AboutPage  from './pages/AboutPage';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/image-upload" element={<Image />} />
        <Route path="/About" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
