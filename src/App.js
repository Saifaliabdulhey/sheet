import './App.scss';
import Home from './components/Home'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Routes, Route, Link, Switch, } from 'react-router-dom';
import California from './components/states/California';
import Texas from './components/states/Texas';
import Alabama from './components/states/Alabama'
import Alaska from './components/states/Alaska'
import AmericanSaoa from './components/states/AmericanSaoa'
import Arizona from './components/states/Arizona'
import Arkansas from './components/states/Arkansas'
import Dc from './components/states/Dc'
import SouthCarolina from './components/states/SouthCarolina'
import Colorado from './components/states/Colorado'
import Connecticut from './components/states/Connecticut'
import DistrictOfColombia from './components/states/DistrictOfColombia'
import Florida from './components/states/Florida'
import Geogia from './components/states/Geogia'
import Guam from './components/states/Guam'
import Hampshire from './components/states/Hampshire'
import Hawaii from './components/states/Hawaii'
import Idaho from './components/states/Idaho'
import Illinois from './components/states/Illinois'
import Iowa from './components/states/Iowa'
import Kansas from './components/states/Kansas'
import Kentuck from './components/states/Kentuck'
import Louisian from './components/states/Louisian'
import Maine from './components/states/Maine'
import Maryland from './components/states/Maryland'
import Massachusetts from './components/states/Massachusetts'
import Mexico from './components/states/Mexico'
import Michigan from './components/states/Michigan'
import Minnesota from './components/states/Minnesota'
import Mississippi from './components/states/Mississippi'
import Missouri from './components/states/Missouri'
import Montana from './components/states/Montana'
import Nebraska from './components/states/Nebraska'
import Nevada from './components/states/Nevada'
import Newjersey from './components/states/Newjersey'
import Newyourk from './components/states/Newyourk'
import NorthCarolina from './components/states/NorthCarolina'
import NorthDakota from './components/states/NorthDakota'
import Ohio from './components/states/Ohio'
import Oklahoma from './components/states/Oklahoma'
import Oregon from './components/states/Oregon'
import Puerto from './components/states/Puerto'
import Rhodeisland from './components/states/Rhodeisland'
import Tennessee from './components/states/Tennessee'
import Utah from './components/states/Utah'
import Vermont from './components/states/Vermont'
import Virginia from './components/states/Virginia'
import Washington from './components/states/Washington'
import Wisconsina from './components/states/Wisconsina'
import Wyoming from './components/states/Wyoming'
import WestVirginia from './components/states/WestVirginia'
import Delaware from './components/states/Delaware'
import Indiana from './components/states/Indiana'
import SouthDakota from './components/states/SouthDakota'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/narutosheet" element={<Home />} />
          <Route path="/landing/california" element={<California />} />
          <Route path="/landing/southDakota" element={<SouthDakota />} />
          <Route path="/landing/southCarolina" element={<SouthCarolina />} />
          <Route path="/landing/indiana" element={<Indiana />} />
          <Route path="/landing/alabama" element={<Alabama />} />
          <Route path="/landing/alaska" element={<Alaska />} />
          <Route path="/landing/americanSaoa" element={<AmericanSaoa />} />
          <Route path="/landing/arizona" element={<Arizona />} />
          <Route path="/landing/arkansas" element={<Arkansas />} />
          <Route path="/landing/dc" element={<Dc />} />
          <Route path="/landing/texas" element={<Texas />} />
          <Route path="/landing/guam" element={<Guam />} />
          <Route path="/landing/hampshire" element={<Hampshire />} />
          <Route path="/landing/hawaii" element={<Hawaii />} />
          <Route path="/landing/idaho" element={<Idaho />} />
          <Route path="/landing/colorado" element={<Colorado />} />
          <Route path="/landing/connecticut" element={<Connecticut />} />
          <Route path="/landing/districtOfColombia" element={<DistrictOfColombia />} />
          <Route path="/landing/florida" element={<Florida />} />
          <Route path="/landing/geogia" element={<Geogia />} />
          <Route path="/landing/westVirginia" element={<WestVirginia />} />
          <Route path="/landing/wyoming" element={<Wyoming />} />
          <Route path="/landing/wisconsina" element={<Wisconsina />} />
          <Route path="/landing/washington" element={<Washington />} />
          <Route path="/landing/virginia" element={<Virginia />} />
          <Route path="/landing/vermont" element={<Vermont />} />
          <Route path="/landing/utah" element={<Utah />} />
          <Route path="/landing/tennessee" element={<Tennessee />} />
          <Route path="/landing/rhodeisland" element={<Rhodeisland />} />
          <Route path="/landing/puerto" element={<Puerto />} />
          <Route path="/landing/oregon" element={<Oregon />} />
          <Route path="/landing/oklahoma" element={<Oklahoma />} />
          <Route path="/landing/ohio" element={<Ohio />} />
          <Route path="/landing/northDakota" element={<NorthDakota />} />
          <Route path="/landing/northCarolina" element={<NorthCarolina />} />
          <Route path="/landing/newyourk" element={<Newyourk />} />
          <Route path="/landing/newjersey" element={<Newjersey />} />
          <Route path="/landing/nevada" element={<Nevada />} />
          <Route path="/landing/nebraska" element={<Nebraska />} />
          <Route path="/landing/montana" element={<Montana />} />
          <Route path="/landing/missouri" element={<Missouri />} />
          <Route path="/landing/mississippi" element={<Mississippi />} />
          <Route path="/landing/minnesota" element={<Minnesota />} />
          <Route path="/landing/michigan" element={<Michigan />} />
          <Route path="/landing/mexico" element={<Mexico />} />
          <Route path="/landing/massachusetts" element={<Massachusetts />} />
          <Route path="/landing/maryland" element={<Maryland />} />
          <Route path="/landing/maine" element={<Maine />} />
          <Route path="/landing/louisian" element={<Louisian />} />
          <Route path="/landing/kentuck" element={<Kentuck />} />
          <Route path="/landing/kansas" element={<Kansas />} />
          <Route path="/landing/iowa" element={<Iowa />} />
          <Route path="/landing/illinois" element={<Illinois />} />
          <Route path="/landing/delaware" element={<Delaware />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
