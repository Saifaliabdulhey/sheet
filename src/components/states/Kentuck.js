import React from 'react'
import kentucky from '../../images/kentucky.png'
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
        <img className="watermark" src={kentucky} />
        <h1>KY - Kentucky State</h1>
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
              <p>BOWLING GREEN- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BOWLING GREEN</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,125</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,750</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOUISVILLE NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>EMINENCE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,125</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,750</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOUISVILLE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SHEPHERDSVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,125</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,750</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PADUCAH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>PADUCAH</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,125</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,888</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,750</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LEXINGTON EAST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LEXINGTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,888$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LEXINGTON WEST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LAWRENCEBURG</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,888$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LOUISVILLE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LOUISVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,888$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>WALTON COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WALTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,888$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,750$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>ASHLAND- IAA</p>
          </div>
          <div class="table-cell first-cell">
            <p>ASHLAND</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,263$</p>
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