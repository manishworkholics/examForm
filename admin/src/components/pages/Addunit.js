import React from 'react'

const Addunit = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center heading'>Add Units</h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-1'></div>
          <div className='col-md-10'>
            <form className='form'>
              <div className="row mt-3">
                <div className="col">
                  <label for="email" className="form-label">Exam:</label>
                  <select class="form-select">
                    <option>IIT</option>
                    <option>NEET</option>
                    <option>C.A</option>
                  </select>
                </div>
                <div className="col">
                  <label for="email" className="form-label">Subject:</label>
                  <select class="form-select">
                    <option>PHYSICS - 12th</option>
                    <option>CHEMISTRY - 12th</option>
                    <option>MATHS - 12th</option>
                  </select>
                </div>
                <div className="col">
                  <label for="email" className="form-label">unit Id:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter title" name="email" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label for="email" className="form-label">title:</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter title" name="email" />
                </div>
              </div>
              <div className='text-center mt-3'><button type="submit" class="btn btn-primary ">Submit</button></div>
            </form>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    </>
  )
}

export default Addunit