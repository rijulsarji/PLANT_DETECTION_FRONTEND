import './App.css';
import Image from './pages/Image.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/image-upload" element={<Image />} />
      </Routes>
    </div>
  );
}

export default App;
