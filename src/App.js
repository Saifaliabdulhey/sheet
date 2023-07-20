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
          <Route path="/naruto" element={<LandingPage />} />
          <Route path="/sheet" element={<Home />} />
          <Route path="/naruto/california" element={<California />} />
          <Route path="/naruto/southDakota" element={<SouthDakota />} />
          <Route path="/naruto/southCarolina" element={<SouthCarolina />} />
          <Route path="/naruto/indiana" element={<Indiana />} />
          <Route path="/naruto/alabama" element={<Alabama />} />
          <Route path="/naruto/alaska" element={<Alaska />} />
          <Route path="/naruto/americanSaoa" element={<AmericanSaoa />} />
          <Route path="/naruto/arizona" element={<Arizona />} />
          <Route path="/naruto/arkansas" element={<Arkansas />} />
          <Route path="/naruto/dc" element={<Dc />} />
          <Route path="/naruto/texas" element={<Texas />} />
          <Route path="/naruto/guam" element={<Guam />} />
          <Route path="/naruto/hampshire" element={<Hampshire />} />
          <Route path="/naruto/hawaii" element={<Hawaii />} />
          <Route path="/naruto/idaho" element={<Idaho />} />
          <Route path="/naruto/colorado" element={<Colorado />} />
          <Route path="/naruto/connecticut" element={<Connecticut />} />
          <Route path="/naruto/districtOfColombia" element={<DistrictOfColombia />} />
          <Route path="/naruto/florida" element={<Florida />} />
          <Route path="/naruto/geogia" element={<Geogia />} />
          <Route path="/naruto/westVirginia" element={<WestVirginia />} />
          <Route path="/naruto/wyoming" element={<Wyoming />} />
          <Route path="/naruto/wisconsina" element={<Wisconsina />} />
          <Route path="/naruto/washington" element={<Washington />} />
          <Route path="/naruto/virginia" element={<Virginia />} />
          <Route path="/naruto/vermont" element={<Vermont />} />
          <Route path="/naruto/utah" element={<Utah />} />
          <Route path="/naruto/tennessee" element={<Tennessee />} />
          <Route path="/naruto/rhodeisland" element={<Rhodeisland />} />
          <Route path="/naruto/puerto" element={<Puerto />} />
          <Route path="/naruto/oregon" element={<Oregon />} />
          <Route path="/naruto/oklahoma" element={<Oklahoma />} />
          <Route path="/naruto/ohio" element={<Ohio />} />
          <Route path="/naruto/northDakota" element={<NorthDakota />} />
          <Route path="/naruto/northCarolina" element={<NorthCarolina />} />
          <Route path="/naruto/newyourk" element={<Newyourk />} />
          <Route path="/naruto/newjersey" element={<Newjersey />} />
          <Route path="/naruto/nevada" element={<Nevada />} />
          <Route path="/naruto/nebraska" element={<Nebraska />} />
          <Route path="/naruto/montana" element={<Montana />} />
          <Route path="/naruto/missouri" element={<Missouri />} />
          <Route path="/naruto/mississippi" element={<Mississippi />} />
          <Route path="/naruto/minnesota" element={<Minnesota />} />
          <Route path="/naruto/michigan" element={<Michigan />} />
          <Route path="/naruto/mexico" element={<Mexico />} />
          <Route path="/naruto/massachusetts" element={<Massachusetts />} />
          <Route path="/naruto/maryland" element={<Maryland />} />
          <Route path="/naruto/maine" element={<Maine />} />
          <Route path="/naruto/louisian" element={<Louisian />} />
          <Route path="/naruto/kentuck" element={<Kentuck />} />
          <Route path="/naruto/kansas" element={<Kansas />} />
          <Route path="/naruto/iowa" element={<Iowa />} />
          <Route path="/naruto/illinois" element={<Illinois />} />
          <Route path="/naruto/delaware" element={<Delaware />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
