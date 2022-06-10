import React from 'react'
import './mobile.css'
function Mobile({menut, setmenut}) {
  return (
    <div className='Mobile'>
      <div className='close' onClick={() =>setmenut(!menut)}>
      <i class="icon ion-md-close"></i>
      </div>
      <div className='mobopt'>
      <div className='mobmenu'>
        <a href='#fetch' onClick={() =>setmenut(!menut)}><i class="icon ion-md-paper iconstyle"></i>Fetch Bills</a>
      </div>
      <div className='mobmenu'>
        <a href='#upload' onClick={() =>setmenut(!menut)}><i class="icon ion-md-cloud iconstyle"></i> Upload Images</a>
      </div>
      <div className='mobmenu'>
        <a href="#report" onClick={() =>setmenut(!menut)}><i class="icon ion-md-analytics iconstyle"></i>Fraud Detection Report</a>
      </div>
      <div className='mobmenu'>
        <a href='#about' onClick={() =>setmenut(!menut)}><i class="icon ion-md-people iconstyle"></i>About</a>
      </div>
      </div>
    </div>
  )
}

export default Mobile