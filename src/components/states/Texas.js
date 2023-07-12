import React from 'react'
import taxas from '../../images/dell.jpeg'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';
import dell from '../used/dell'
import lenovo from '../used/lenovo'
import hp from '../used/hp'
import msi from '../used/msi'
import asus from '../used/asus'
import acer from '../used/acer'
import samsung from '../used/samsung'
import microsoft from '../used/microsoft'
import huawei from '../used/huawei'


function California() {
  return (
    <div className="container">
      <div className="head">
        <img className="watermark" src={logo} />
        <h1>NARUTO CENTER</h1>
      </div>
      <div className="img_container">
        <Link className="link" to='/landing'> <img className="back" src={back} /></Link>
      </div>
      <hr />
      <h1 className='brand'>Dell</h1>
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
            dell.stateData.map((item, index) => {

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
          <h1 className='brand'>Lenovo</h1>
          <hr />
          {
            lenovo.stateData.map((item, index) => {

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
          <h1 className='brand'>HP</h1>
          <hr />
          {
            hp.stateData.map((item, index) => {

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
          <h1 className='brand'>MSI</h1>
          <hr />
          {
            msi.stateData.map((item, index) => {

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
          <h1 className='brand'>ASUS</h1>
          <hr />
          {
            asus.stateData.map((item, index) => {

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
          <h1 className='brand'>ACER</h1>
          <hr />
          {
            acer.stateData.map((item, index) => {

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
          <h1 className='brand'>SAMSUNG</h1>
          <hr />
          {
            samsung.stateData.map((item, index) => {

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
          <h1 className='brand'>MICROSOFT</h1>
          <hr />
          {
            microsoft.stateData.map((item, index) => {

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
          <h1 className='brand'>HUAWEI</h1>
          <hr />
          {
            huawei.stateData.map((item, index) => {

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