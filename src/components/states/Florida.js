import React from 'react'
import florida from '../../images/florida.png'
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
        <img className="watermark" src={florida} />
        <h1>FL - Florida State</h1>
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
              <p>BOGGY CREEK - IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ORLANDO</p>
            </div>
            <div class="table-cell first-cell">
              <p>1,875$</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,638</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,500</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>CLEARWATER- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>CLEARWATER</p>
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
              <p>FORT MYERS- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FORT MYERS</p>
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
              <p>FORT PIERCE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>FORT PIERCE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,950</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,713</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,575</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>JACKSONVILLE- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>JACKSONVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,588</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,450</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MIAMI- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>OPA LOCKA</p>
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
              <p>ORLANDO- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>ORLANDO</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,875</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,638</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,500</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>ORLANDO NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>SANFORD</p>
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
              <p>PENSACOLA- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>MILTON</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,975</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,738</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,600</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>TAMPA NORTH- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>HUDSON</p>
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
              <p>TAMPA- IAA</p>
            </div>
            <div class="table-cell first-cell">
              <p>PALMETTO</p>
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
              <p>FT. PIERCE- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>FORT PIERCE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,975</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,738</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,600</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>JACKSONVILLE EAST- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>JACKSONVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,588</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,450</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MIAMI CENTRAL- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MIAMI</p>
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
              <p>MIAMI SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>HOMESTEAD</p>
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
              <p>ORLANDO NORTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>APOPKA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,875</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,638</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,500</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>
          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>OCALA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>OCALA</p>
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
              <p>PUNTA GORDA- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>PUNTA GORDA</p>
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
              <p>TAMPA SOUTH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>RIVERVIEW</p>
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
              <p>WEST PALM BEACH- COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>WEST PALM BEACH</p>
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
              <p>JACKSONVILLE WEST COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>JACKSONVILLE</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,825</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,588</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,450</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>

          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MIAMI NORTH COPART</p>
            </div>
            <div class="table-cell first-cell">
              <p>MIAMI</p>
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
              <p>MANHEIM FOR LAUDERDALE</p>
            </div>
            <div class="table-cell first-cell">
              <p>DAVIE</p>
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
              <p>MANHEIM BENSACOLA</p>
            </div>
            <div class="table-cell first-cell">
              <p>BENSACOLA</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,975</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,738</p>
            </div>
            <div class="table-cell first-cell">
              <p>$1,600</p>
            </div>
            <div class="table-cell first-cell border">
              <p>+700$</p>
            </div>
          </div>


          <div class="table-row">
            <div class="table-cell first-cell-Auction ">
              <p>MANHEIM FORT MYERS</p>
            </div>
            <div class="table-cell first-cell">
              <p>FORT MYERS</p>
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
            <p>MANHEIM CENTRAL FLORIDA</p>
          </div>
          <div class="table-cell first-cell">
            <p>ORLANDO</p>
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