import React from 'react'
import wisconsin from '../../images/wisconsin.png'
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
        <img className="watermark" src={wisconsin} />
        <h1>WI - Wisconsin State</h1>
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
              <p>MILWAUKEE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SUSSEX</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>PORTAGE - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>PORTAGE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,413</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,225$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,225$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>APPLETON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>APPLETON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,413</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,225$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,225$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MILWAUKEE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CUDAHY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MADISON- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MADISON</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM MILWAUKEE</p>
            </div>
            <div class="table-cell first-cell">
              <p>CALEDONIA</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,363$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,175$</p>
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