import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Theme from './pages/Theme';
import Map from './pages/Map';

// Education pages
import CCSF from './pages/education/CCSF';
import CCSFCampus from './pages/education/CCSFCampus';
import CCSFCommunity from './pages/education/CCSFCommunity';
import LauNichols from './pages/education/LauNichols';
import ModelMinority from './pages/education/ModelMinority';
import CFAA from './pages/education/CFAA';

// Housing pages
import Housing from './pages/housing/Housing';
import IHotel from './pages/housing/IHotel';
import PingYuen from './pages/housing/PingYuen';
import MeiLunYuen from './pages/housing/MeiLunYuen';
import HousingToday from './pages/housing/HousingToday';
import ReimaginingCommunity from './pages/housing/ReimaginingCommunity';

// Culture pages
import Culture from './pages/culture/Culture';
import KublaKhan from './pages/culture/KublaKhan';

// Public Health pages
import PublicHealth from './pages/public-health/PublicHealth';
import ChineseHospital from './pages/public-health/ChineseHospital';
import MentalHealth from './pages/public-health/MentalHealth';
import TraditionalMedicine from './pages/public-health/TraditionalMedicine';
import WomensHealth from './pages/public-health/WomensHealth';

// Public Places pages
import PublicSpaces from './pages/public-spaces/PublicSpaces';
import Alleyways from './pages/public-spaces/Alleyways';
import PortsmouthSquare from './pages/public-spaces/PortsmouthSquare';
import WohHeiYuen from './pages/public-spaces/WohHeiYuen';
import WillyWong from './pages/public-spaces/WillyWong';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about-us" element={<About />}></Route>
          <Route exact path="/interactive-map" element={<Map />}></Route>
          <Route exact path="/main-themes" element={<Theme />}></Route>

          {/* Education */}
          <Route exact path="/education/ccsf-chinatown" element={<CCSF />}></Route>
          <Route exact path="/education/ccsf-chinatown/campus" element={<CCSFCampus />}></Route>
          <Route exact path="/education/ccsf-chinatown/community" element={<CCSFCommunity />}></Route>
          <Route exact path="/education/lau-nichols" element={<LauNichols />}></Route>
          <Route exact path="/education/model-minority" element={<ModelMinority />}></Route>
          <Route exact path="/education/cfaa" element={<CFAA />}></Route>

          {/* Public Health */}
          <Route exact path="/public-health" element={<PublicHealth />}></Route>
          <Route exact path="/public-health/chinese-hospital" element={<ChineseHospital />}></Route>
          <Route exact path="/public-health/asian-mental-health" element={<MentalHealth />}></Route>
          <Route exact path="/public-health/traditional-medicine" element={<TraditionalMedicine />}></Route>
          <Route exact path="/public-health/womens-health" element={<WomensHealth />}></Route>

          {/* Housing */}
          <Route exact path="/housing" element={<Housing />}></Route>
          <Route exact path="/housing/i-hotel" element={<IHotel />}></Route>
          <Route exact path="/housing/ping-yuen" element={<PingYuen />}></Route>
          <Route exact path="/housing/mei-lun-yuen" element={<MeiLunYuen />}></Route>
          <Route exact path="/housing/housing-community-today" element={<HousingToday />}></Route>
          <Route exact path="/housing/reimagining-community-safety" element={<ReimaginingCommunity />}></Route>

          {/* Arts & Culture */}
          <Route exact path="/culture" element={<Culture />}></Route>
          <Route exact path="/culture/kubla-khan-nightclub" element={<KublaKhan />}></Route>

          {/* Public Spaces */}
          <Route exact path="/public-spaces" element={<PublicSpaces />}></Route>
          <Route exact path="/public-spaces/alleyways" element={<Alleyways />}></Route>
          <Route exact path="/public-spaces/portsmouth-square" element={<PortsmouthSquare />}></Route>
          <Route exact path="/public-spaces/willy-wong-playground" element={<WillyWong />}></Route>
          <Route exact path="/public-spaces/woh-hei-yuen-park" element={<WohHeiYuen />}></Route>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
