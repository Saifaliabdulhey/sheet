import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home_container">
      <div className="loader"></div>
      <img src={logo} />
      <h1>WELCOME TO NARUTO CENTER</h1>
      <p>Naruto Center where the enovation at your fingertips!</p>
      <Link to='/naruto'><button to='/naruto'>View The List</button></Link>
    </div>
  )
}

export default Home