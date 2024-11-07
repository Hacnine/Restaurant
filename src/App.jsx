
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Featured/Home';
import './App.css'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/AboutPage';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App ">
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/client" element={<Clients />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
