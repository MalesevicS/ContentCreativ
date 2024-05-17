import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ReferencePage from './pages/ReferencePage';
import 'remixicon/fonts/remixicon.css';





const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reference" element={<ReferencePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;
