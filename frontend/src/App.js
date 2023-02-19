import './App.css';
import ImageUpload from './pages/ImageUpload.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Plants from './pages/newResult';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
    {window.location.pathname === "/" ? <LandingPage /> : 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<ImageUpload />} />
          <Route path="/about" element={<Home />} /> 
          <Route path="/plants/:id" element={<Plants />} />
        </Routes>
      </div>
    }
    </>
  );
}

export default App;
