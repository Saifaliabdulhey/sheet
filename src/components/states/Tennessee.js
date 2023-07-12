import React from 'react'
import tennessee from '../../images/tennessee.png'
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
        <img className="watermark" src={tennessee} />
        <h1>TN - Tennessee State</h1>
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
            <p>CHATTANOOGA- IAA</p>
          </div>
          <div class="table-cell first-cell">
            <p>SPARTANBURG</p>
          </div>
          <div class="table-cell first-cell">
            <p>$2,025</p>
          </div>
          <div class="table-cell first-cell">
            <p>$1,788</p>
          </div>
          <div class="table-cell first-cell">
            <p>$1,650</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>KNOXVILLE- IAA</p>
          </div>
          <div class="table-cell first-cell">
            <p>KNOXVILLE</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,000$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,763$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,625$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>MEMPHIS- IAA</p>
          </div>
          <div class="table-cell first-cell">
            <p>MEMPHIS</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,100$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,863$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,725$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>KNOXVILLE- COPART</p>
          </div>
          <div class="table-cell first-cell">
            <p>MADISONVILLE</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,000$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,763$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,625$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>MEMPHIS- COPART</p>
          </div>
          <div class="table-cell first-cell">
            <p>MEMPHIS</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,100$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,863$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,725$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>NASHVILLE- COPART</p>
          </div>
          <div class="table-cell first-cell">
            <p>LEBANON</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,000$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,763$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,625$</p>
          </div>
          <div class="table-cell first-cell border">
            <p>+700$</p>
          </div>
        </div>

        <div class="table-row">
          <div class="table-cell first-cell-Auction ">
            <p>MANHEIM NASHVILLE</p>
          </div>
          <div class="table-cell first-cell">
            <p>MOUNT JULIET</p>
          </div>
          <div class="table-cell first-cell">
            <p>2,025$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,788$</p>
          </div>
          <div class="table-cell first-cell">
            <p>1,650$</p>
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