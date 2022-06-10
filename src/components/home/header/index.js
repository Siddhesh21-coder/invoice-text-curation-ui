import React, { useState } from 'react'
import Mobile from '../../../view/mobile';
import Web from '../../../view/web';

import './header.css'
function Header() {
    const [menut,setmenut]=useState(false);
  return (
    <div className='Header'>
        <div className="teamName">
            Team Mavericks
        </div>
        <div className="menu">
        <div className='Web'>
                <Web />
            </div>
            <div className='mob'>
               
                <div onClick={() => setmenut(!menut)}>
                <i class="icon ion-md-menu menuicon"></i>
                </div>
                {menut&&<Mobile menut={menut} setmenut={setmenut}/>}
              </div>
        </div>
    </div>
  )
}

export default Header