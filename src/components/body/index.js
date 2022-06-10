import React from 'react'
import './body.css'
import Fetch from './fetch'
function Body() {
  return (
    <div className='body'>
        <div className='bodytext'>
            Scan and Verify your invoices
        </div>
        <div className='body-img'>
        <img className='bodyimg1 imgb' src='https://arrhpy6on928hi01nbmnbk47-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/01-STAMPLI__Invoice-scanning_hero-1024x577.png' alt='detect' />
            <img className='bodyimg2 imgb' src='https://medicaldialogues.in/h-upload/2021/01/20/146322-insurance-policy-fraud.webp'  alt='fraud'/>
           
        </div>
        <div className='bodytext'>

        </div>
        <div className='separator'></div>
        <Fetch />
    </div>
  )
}

export default Body