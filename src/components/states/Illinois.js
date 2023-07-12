import React from 'react'
import illinois from '../../images/illinois.png'
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
        <img className="watermark" src={illinois} />
        <h1>IL - Illinois State</h1>
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
              <p>CHICAGO- WEST- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>AURORA</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHICAGO NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>DUNDEE</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHICAGO SOUTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>MARKHAM</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ST. LOUIS- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GRANITE CITY</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>LINCOLN- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>LINCOLN</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHICAGO NORTH COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ELGIN</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHICAGO SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHICAGO HEIGHTS</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>WHEELING- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WHEELING</p>
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

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PEORIA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>PEKIN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,313$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,125$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>MANHEIM CHICAGO</p>
          </div>
          <div class="table-cell first-cell">
            <p>MATTESON</p>
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