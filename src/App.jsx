import { useState } from 'react'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>

      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/about" element={<About/>} ></Route>
          <Route exact path="/contact" element={<Contact/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
