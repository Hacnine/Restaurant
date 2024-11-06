
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Featured/Home';
import './App.css'
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App ">
      <Router>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
