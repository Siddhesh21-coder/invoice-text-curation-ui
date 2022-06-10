import React from 'react'
import './web.css'
function Web() {
  return (
    <div className="webview">
         <div className='webmenu'>
        <a href='#fetch'><i class="icon ion-md-paper iconstyle"></i>Fetch Bills</a>
      </div>
      <div className='webmenu'>
        <a href='#upload'><i class="icon ion-md-cloud iconstyle"></i> Upload Images</a>
      </div>
      <div className='webmenu'>
        <a href="#report"><i class="icon ion-md-analytics iconstyle"></i>Fraud Detection Report</a>
      </div>
      <div className='webmenu'>
        <a href='#about'><i class="icon ion-md-people iconstyle"></i>About</a>
      </div>
    </div>
  )
}

export default Web