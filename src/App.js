import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Theme from './pages/Theme';

// Education pages
import CCSF from './pages/education/CCSF';
import LauNichols from './pages/education/LauNichols';
import CFAA from './pages/education/CFAA';

import IHotel from './pages/tenants-community/IHotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HashRouter basename="/">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about-us" element={<About />}></Route>
            {/* Route exact path="/interactive-map" element={<Map />}></Route> */}
            <Route exact path="/main-themes" element={<Theme />}></Route>

            {/* Education */}
            <Route exact path="/education/ccsf-chinatown" element={<CCSF />}></Route>
            <Route exact path="/education/lau-nichols" element={<LauNichols />}></Route>
            <Route exact path="/education/cfaa" element={<CFAA />}></Route>

            {/* Public Health */}
            {/* <Route exact path="/public-health/chinese-hospital" element={<ChineseHospital />}></Route> */}
            {/* <Route exact path='/public-health/asian-mental-health' element={<AsianMH />}></Route> */}
            {/* <Route exact path="/public-health/traditional-medicine" element={<TradMed />}></Route> */}
            {/* <Route exact path="/public-health/womens-health" element={<WomensHealth />}></Route> */}

            {/* Housing */}
            <Route exact path="/housing/i-hotel" element={<IHotel />}></Route>
            {/* Route exact path="/housing/ping-yuen" element={<PingYuen />}></Route> */}
            {/* Route exact path="/housing/mei-lun-yuen" element={<MeiLunYuen />}></Route> */}
            {/* Route exact path="/housing/housing-community-today" element={<HousingCom />}></Route> */}

            {/* Arts & Culture */}
            {/* Route exact path="/arts-culture/kubla-khan-nightclub" element={<KublaKhan />}></Route> */}

            {/* Public Spaces */}
            {/* Route exact path="/public-spaces/portsmouth-square" element={<PMSquare />}></Route> */}
            {/* Route exact path="/public-spaces/willy-wong-playground" element={<WillyWong />}></Route> */}
            {/* Route exact path="/public-spaces/st-marys-square" element={<StMarys />}></Route> */}
            {/* Route exact path="/public-spaces/woh-hei-yuen-park" element={<WHYPark />}></Route> */}
            {/* Route exact path="/public-spaces/betty-ann-ong-rec-center" element={<BAORecCent />}></Route> */}

          </Routes>
        </HashRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
