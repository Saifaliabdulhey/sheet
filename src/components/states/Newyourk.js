import React from 'react'
import newyork from '../../images/newyork.png'
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
        <img className="watermark" src={newyork} />
        <h1>NY - New York State</h1>
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
              <p>ALBANY- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SCHENECTADY</p>
            </div>
            <div class="table-cell first-cell">
              <p>$2,013</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>BUFFALO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BUFFALO</p>
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
              <p>LONG ISLAND- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>MEDFORD</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,013$</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NEWBURGH IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ROCK TAVERN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,013$</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ROCHESTER IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BERGEN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,138$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,950$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,950$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SYRACUSE IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CICERO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,088$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,900$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,900$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ALBANY- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ALBANY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,013$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>BUFFALO- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>ANGOLA</p>
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
              <p>LONG ISLAND- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>BROOKHAVEN</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,013$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>NEWBURGH COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MARLBORO</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,013$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,825$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ROCHESTER COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>LEROY</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,138$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,950$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,950$</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>SYRACUSE COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>CENTRAL SQUARE</p>
            </div>
            <div class="table-cell first-cell">
              <p>2,088$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,900$</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,900$</p>
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