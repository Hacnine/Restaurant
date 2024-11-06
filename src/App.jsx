
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Featured/Home';
import './App.css'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App ">
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />

        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
