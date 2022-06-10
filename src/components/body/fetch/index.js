import React from 'react'
import './fetch.css'
function Fetch() {
  return (
    
       <form className='demoForm' id='fetch'>
       <h2>Fetch Bills</h2>
       <div className='form-group'>
         <label htmlFor='email'>Bill Id: </label>
         <input type='email' className='form-control' placeholder='Enter bill Id'
           name='email' />
       </div>
       <div className='form-group'>
         <label htmlFor='password'>Password:</label>
         
       </div>
       <button type='submit' className='btn btn-primary'>
         Fetch
       </button>
     </form>

  )
}

export default Fetch