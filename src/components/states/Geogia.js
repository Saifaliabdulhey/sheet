import React from 'react'
import geogia from '../../images/georgia.png'
import logo from '../../images/logo.png'
import back from '../../images/back.png'
import { Link } from 'react-router-dom';

function California() {
  return (
    <div className="container">
      <div className="head">
        <img className="watermark" src={logo} />
        <h1>AL-SAFEE AL-MOTAHIDA</h1>
      </div>
      <hr></hr>
      <div className="img_container">
        <Link className="link" to='/landing'> <img className="back" src={back} /></Link>
        <img className="watermark" src={geogia} />
        <h1>GA - Georgia State</h1>
      </div>
      <div class="table-box">
        <div class="table-row table-head">
          <div class="table-cell first-cell-Auction ">
            <p>المزاد</p>
          </div>
          <div class="table-cell first-cell">
            <p>المدينة</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الاردن)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (الامارات)</p>
          </div>
          <div class="table-cell first-cell">
            <p>سعر النقل (ام قصر)</p>
          </div>
          <div class="first-cell table-cell border">
            <p>سعر النقل (سيارة كبيرة)</p>
          </div>

        </div>
        <div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA SOUTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>LAKE CITY</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,525</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ACWORTH</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,525</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA EAST IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>WINDER</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAVANNAH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>RINCON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,725</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,488</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,350</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA EAST COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LOGANVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,525</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ELLENWOOD</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA WEST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>AUSTELL</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ATLANTA NORTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>GAINESVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CARTERSVILLE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CARTERSVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MACON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>BYRON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SAVANNAH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>SAVANNAH</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,725</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,488</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,350</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>TIFTON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>TIFTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,900</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,663</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,525$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>MANHEIM DARLINGTON</p>
          </div>
          <div class="table-cell first-cell">
            <p>DARLINGTON</p>
          </div>
          <div class="table-cell first-cell">
            <p>$1,875</p>
          </div>
          <div class="table-cell first-cell">
            <p>$1,638</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,500$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>
          <div className='notes'>
            <h1>ملاحضات</h1>
            <i>تكون كلفت النقل الداخلي
              للسيارة ذات الحجم الكبيرة مثل الدوج رام والسوبر بين وغيرها اعلى
              بقليل بسبب الفرق في بالوزن والحجم مقارنة بالمركبات الاعتيادية -</i>
            <i>تتكون كلفت النقل الداخلي من الولايات ذات الكوارث الطبيعية (الغرق , الاعاصير, العواصف الثلجية) اعلى خلال فترة هذه الكوارث  -</i>
            <i>تكون كلفة النقل الداخلي بالنسبة للساحات الخارج المزاد اعلى بقليل حسب بعد الساحة الثانوية
              عن موقع المزاد يرجى الاستفسار عن السعر قبل الشراء -</i>
          </div>

        </div>
      </div>
    </div>
  )
}

export default California