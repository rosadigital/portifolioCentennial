import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
// import Projects from './pages/Projects';
// import Services from './pages/Services';
// import ContactMe from './pages/ContactMe';
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/contact" element={<ContactMe />} /> */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
