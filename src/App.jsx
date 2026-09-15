import { Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";
import "./script";

export default function App() {

  const location = useLocation();

  // Pages without Navbar and Footer
  const authPages = [
    "/login",
    "/register"
  ];

  const isAuthPage = authPages.includes(location.pathname);

  return (
    <div className="App">
      {/* Navbar */}
      {!isAuthPage && <Navbar />}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Footer */}
      {!isAuthPage && <Footer />}
    </div>
  );
}