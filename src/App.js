import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { GlobalStyle } from './GlobalStyles'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Privacy from './components/Privacy'

const loading_screen = document.getElementById('loading-screen');

const App = () => {
  useEffect(() => {
    loading_screen.remove();
  }, [])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Privacy' element={<Privacy />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      <GlobalStyle />
    </Router>
  )
};

export default App;
