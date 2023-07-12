import React from 'react'
import north_carolina from '../../images/north_carolina.png'
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
        <img className="watermark" src={north_carolina} />
        <h1>NC - North Carolina State</h1>
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
              <p>ASHEVILLE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FLETCHER</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHARLOTTE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHARLOTTE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CONCORD- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CONCORD</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>GREENSBORO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>GRAHAM</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>RALEIGH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CLAYTON</p>
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
              <p>WILMINGTON- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CASTLE HAYNE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CHINA GROVE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CHINA GROVE</p>
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
              <p>LUMBERTON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LUMBERTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MEBANE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MEBANE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MOCKSVILLE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MOCKSVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,925</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,688</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,550</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>RALEIGH COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>DUNN</p>
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
            <p>RALEIGH COPART</p>
          </div>
          <div class="table-cell first-cell">
            <p>DUNN</p>
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
          <p>MANHEIM STATESVILLE</p>
        </div>
        <div class="table-cell first-cell">
          <p>STATESVILLE</p>
        </div>
        <div class="table-cell first-cell">
          <p>$1,925</p>
        </div>
        <div class="table-cell first-cell">
          <p>$1,688</p>
        </div>
        <div class="table-cell first-cell">
          <p>$1,550</p>
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