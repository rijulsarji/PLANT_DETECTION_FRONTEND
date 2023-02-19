import './App.css';
import ImageUpload from './pages/ImageUpload.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Plants from './pages/Plants';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/image-upload" element={<ImageUpload />} />
        <Route path="/plants/:id" element={<Plants />} />
      </Routes>
    </div>
  );
}

export default App;
