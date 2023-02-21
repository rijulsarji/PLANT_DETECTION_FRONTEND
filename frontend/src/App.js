import './App.css';
import ImageUpload from './pages/ImageUpload.js';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Plants from './pages/newResult';
import LandingPage from './pages/LandingPage';
import InputForm from './pages/InputForm';

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
          <Route path="/input-form" element={<InputForm />} />
        </Routes>
      </div>
    }
    </>
  );
}

export default App;
