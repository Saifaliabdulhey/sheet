import React, { useEffect, useState } from 'react'
import california from '../images/california.png'
import logo from '../images/logo.jpg';
import taxas from '../images/taxas.png';
import carolina from '../images/carolina.png';
import connecticut from '../images/connecticut.png';
import geogia from '../images/georgia.png';
import hampshire from '../images/hampshire.png';
import maryland from '../images/maryland.png';
import massachusetts from '../images/massachusetts.png';
import new_jersey from '../images/new_Jersey.svg.png';
import virginia from '../images/virginia.png';
import alabama from '../images/alabama.png'
import alaska from '../images/alaska.png'
import american_saoa from '../images/american_Samoa.png'
import arizona from '../images/arizona.png'
import arkansas from '../images/arkansas.png'
import colorado from '../images/colorado.png'
import district_of_colombia from '../images/district_of_Columbia.png'
import florida from '../images/florida.png'
import guam from '../images/guam.png'
import hawaii from '../images/hawaii.png'
import idaho from '../images/idaho.png'
import illinois from '../images/illinois.png'
import iowa from '../images/iowa.png'
import kansas from '../images/kansas.png'
import kentuck from '../images/kentucky.png'
import louisian from '../images/louisiana.png'
import maine from '../images/maine.png'
import mexico from '../images/mexico.png'
import michigan from '../images/michigan.png'
import minnesota from '../images/minnesota.png'
import mississippi from '../images/mississippi.png'
import missouri from '../images/missouri.png'
import montana from '../images/montana.png'
import nebraska from '../images/nebraska.png'
import nevada from '../images/nevada.png'
import newyourk from '../images/newyork.png'
import north_carolina from '../images/north_carolina.png'
import north_Dakota from '../images/north_Dakota.png'
import ohio from '../images/ohio.png'
import oklahoma from '../images/oklahoma.png'
import oregon from '../images/oregon.png'
// import pennsylvania from '../images/pennsylvania.svg'
import pennsylvania from '../images/pennsylvania.png'
import rhode_island from '../images/rhode_Island.png'
import south_Carolina from '../images/south_Carolina.svg'
import tennessee from '../images/tennessee.png'
import utah from '../images/utah.png'
import vermont from '../images/vermont.png'
import washington from '../images/washington.png'
import west_virginia from '../images/west_Virginia.png'
import wisconsina from '../images/wisconsin.png'
import wyoming from '../images/wyoming.png'
import delaware from '../images/delaware.webp'
import indiana from '../images/indiana.png'
import south_Dakota from '../images/south_Dakota.png'
import { Link } from 'react-router-dom'
import AOS from "aos";
import data from './data'
import search from '../images/search.png'
import Modal from 'react-modal'
import close from '../images/close.png'
import telegram from '../images/telegram.png'
import facebook from '../images/face.png'
import instagram from '../images/instagram1.png'
import location from '../images/locatiaon.png'



function LandingPage() {
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
  }

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false)
  }

  let dataSearch = data.stateData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div className="landingPage">
      <Modal
        isOpen={modalIsOpen}
        closeTimeoutMS={200}
        className='modal'
        backdropClassName="my-backdrop-style"
      >
        <button className="close" onClick={setModalIsOpenToFalse}><img src={close} /></button>
        <div className="modal-content">
          <div className="modal_img">
            <img src={logo} />
          </div>
          <div className="modal_info">
            <h1> شركة  ناروتو </h1>
            <h3> للتواصل معنا عن طريق</h3>
            <div className="contact_icons">
            <a href="https://www.facebook.com/AlsafieCo/"><img src={facebook}/></a>
            <a href="https://www.instagram.com/4fd4/"><img src={instagram} /></a>
            <img src={telegram} />
            </div>
            <h3>او الاتصال على الارقام</h3>
            <div className="contact_icons">
            <li>07729488987</li>
            <li>07729488987</li>
            <li>07729488987</li>
            </div>

            <div className="location">
            <img src={location}/>
            <h3> الجزائر (شارع كيا سابقا)  مقابل شركة اسياسيل </h3>
            </div>
          </div>
        </div>
      </Modal>

      <div className="header">
        <Link to="/narutosheet"><img data-aos="fade-right" data-aos-duration="2300" src={logo} /></Link>
        <div className='title'>
          <h1 data-aos="fade-up" data-aos-duration="1000">NARUTO CENTER</h1>
          <p data-aos="fade-up" data-aos-duration="1500">ALL WHAT WE HAVE IS HERE!</p>
          <button onClick={setModalIsOpenToTrue} data-aos="fade-up" data-aos-duration="2500">ABOUT NARUTO CENTER</button>
        </div>
      </div>
      <div class="search_container">
        <img src={search} />
        <input
          className="search-box"
          type="text" value={filter}
          onChange={searchText.bind(this)}
        />
      </div>
      <hr></hr>
      <div class="grid">
        {
          dataSearch.map((item, index) => {
            return <Link className="link" to={item.link}>
              <div className='grid-item'>
                <img src={item.img} />
                <h1>{item.name}</h1>
              </div>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default LandingPage