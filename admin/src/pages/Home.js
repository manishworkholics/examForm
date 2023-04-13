import React from 'react'
import {Link } from "react-router-dom"


 const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <Link type="button" class="btn btn-success" to="/form-one" >Form Tab</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Home