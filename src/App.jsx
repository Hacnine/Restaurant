
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// import ReservationForm from './components/ReservationForm';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
import './App.css'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Menu />
      <ReservationForm />
      <Testimonials />
      <Footer /> */}
        </Routes>
      </Router>



    </div>
  );
}

export default App;
