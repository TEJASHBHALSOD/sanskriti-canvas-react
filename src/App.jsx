import { useState } from 'react'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css'
import { BrowserRouter, Router, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>

      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/service" element={<Service />}/>
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/goldloan" element={<GoldLoans/>}/>
          <Route exact path="/personalLoan" element={<PersonalLoans/>}/>
          <Route exact path="/businessloan" element={<Businessloan/>}/>
          <Route exact path="/homeloan" element={<Homeloan/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
