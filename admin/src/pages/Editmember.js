import React from 'react'
import { Link } from 'react-router-dom'


const Editmember = () => {
  return (
    <>
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-md-4'></div>
        <div className='col-md-4 text-center'> <h1> Edit Member</h1>  <Link type="button" class="btn btn-success" to="/subscription" >ALL Memeber</Link></div>
        <div className='col-md-4'></div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

          <form action="/action_page.php" className='mt-2' >
            <div class="mb-3 mt-3">
              <label for="name" class="form-label">Name:</label>
              <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" />
            </div>
            <div class="mb-3 mt-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
              </div>
         <div class="mb-3 mt-3">
              <label for="name" class="form-label">City:</label>
              <input type="text" class="form-control" id="name" placeholder="Enter Name" name="name" />
            </div>
           
           <div className='bottom-btn'>
           < Link  to='/' class="btn btn-warning text-center">Update</ Link >
            < Link  to='/subscription' class="btn btn-danger text-center ">Cancel</ Link >
           </div>
          </form>


        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  </>
  )
}

export default Editmember