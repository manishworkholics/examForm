import React from 'react'
import { Link } from 'react-router-dom'


const Formtwo = () => {
  return (
   <>
   <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-4'></div>
          <div className='col-md-4 text-center'> <h1>Add Memebers</h1>  <Link type="button" class="btn btn-success" to="/subscription" >All Member</Link></div>
          <div className='col-md-4'></div>
        </div>
      </div>
   </>
  )
}

export default Formtwo