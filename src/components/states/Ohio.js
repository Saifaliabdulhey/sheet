import React from 'react'
import ohio from '../../images/ohio.png'
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
        <img className="watermark" src={ohio} />
        <h1>OH - Ohio State</h1>
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
              <p>AKRON CANTON- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>NEW PHILADELPHIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,188$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,000$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,000$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CINCINNATI - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHESTER</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,213$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,025$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,025$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CLEVELAND - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>LORAIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,163$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>COLUMBUS IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GROVE CITY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,163$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DAYTON- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>DAYTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,213$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>DAYTON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MORAINE</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,213$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,075$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CLEVELAND WEST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>COLUMBIA STATION</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,163$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CLEVELAND EAST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>NORTHFIELD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,163$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM OHIO</p>
            </div>
            <div class="table-cell first-cell">
              <p>GROVE CITY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,163$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,975$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM CINCINNATI</p>
            </div>
            <div class="table-cell first-cell">
              <p>HAMILTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,213$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,025$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,025$</p>
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