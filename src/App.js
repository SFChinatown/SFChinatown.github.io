import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Theme from './pages/Theme';
import CCSF from './pages/education/CCSF';
import IHotel from './pages/tenants-community/IHotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/main-themes" element={<Theme />}></Route>

          {/* Education */}
          <Route exact path="/education/ccsf-chinatown" element={<CCSF />}></Route>

          {/* Tenant Rights & Community Organising */}
          <Route exact path="/tenants-community/i-hotel" element={<IHotel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
