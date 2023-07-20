import React from 'react'
import geogia from '../../images/georgia.png'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';
import hp from '../brands/aio/hp'
import hpused from '../brands/aio/hpused'


function California() {
  return (
    <div className="container">
           <div className="head">
        <img className="watermark" src={logo} />
        <h1>NARUTO CENTER</h1>
      </div>
      <div className="img_container">
        <Link className="link" to='/naruto'> <img className="back" src={back} /></Link>
      </div>
      <hr />
      <h1 className='brand'>HP AIO</h1>
      <hr />
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell-Auction ">
            <p >Name</p>
          </div>
          <div class="table-cell first-cell">
            <p>CPU</p>
          </div>
          <div class="table-cell first-cell">
            <p>  RAM</p>
          </div>
          <div class="table-cell first-cell">
            <p> HARD </p>
          </div>
          <div class="table-cell first-cell">
            <p> GPU </p>
          </div>
          <div class="first-cell table-cell border">
            <p> Price </p>
          </div>
        </div>
        <div>

        {
            hpused.stateData.map((item, index) => {

              return <div class="table-row">
                <div class="table-cell first-cell-Auction ">
                <spam className="used">used</spam>
                  <p>{item.name}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.cpu}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.ram}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.hard}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.gpu}</p>
                </div>
                <div class="table-cell first-cell border">
                  <p>{item.price}</p>
                </div>
              </div>


            })
          }

        {
            hp.stateData.map((item, index) => {

              return <div class="table-row">
                <div class="table-cell first-cell-Auction ">
                <spam className="new">new</spam>
                  <p>{item.name}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.cpu}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.ram}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.hard}</p>
                </div>
                <div class="table-cell first-cell">
                  <p>{item.gpu}</p>
                </div>
                <div class="table-cell first-cell border">
                  <p>{item.price}</p>
                </div>
              </div>


            })
          }
   
          <div className='notes'>
            <h1>ملاحضات</h1>
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default California