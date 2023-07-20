import React from 'react'
import connecticut from '../../images/connecticut.png'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import macbooknew from '../brands/macbooknew'
import macbookused from '../brands/macbookused'

import { Link } from 'react-router-dom';

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
      <h1 className='brand'>Macbook New</h1>
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
            macbooknew.stateData.map((item, index) => {

              return <div class="table-row">
                <div class="table-cell first-cell-Auction ">
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
          <hr />
          <h1 className='brand'>Macbook Used</h1>
          <hr />
          {
            macbookused.stateData.map((item, index) => {

              return <div class="table-row">
                <div class="table-cell first-cell-Auction ">
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