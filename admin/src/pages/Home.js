import React from 'react'
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-4'></div>
          <div className='col-md-4 text-center'> <h1>ALL Movies</h1>  <Link type="button" class="btn btn-success" to="/form-one" >Add Movies</Link></div>
          <div className='col-md-4'></div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className='col-md-4 mt-3'>
            <div class="card" style={{ width: 300 }}>
              <img class="card-img-top" src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                {/* <Link to='' class="btn btn-primary">See Profile</Link> */}
              </div>
              <div className='bottom-btn'>
                <Link to='/edit-movies' class="btn btn-warning">edit</Link>
                <button class="btn btn-success">delete</button>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-3'>
            <div class="card" style={{ width: 300 }}>
              <img class="card-img-top" src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                {/* <Link to='' class="btn btn-primary">See Profile</Link> */}
              </div>
              <div className='bottom-btn'>
              <Link to='/edit-movies' class="btn btn-warning">edit</Link>
                <button class="btn btn-success">delete</button>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-3'>
            <div class="card" style={{ width: 300 }}>
              <img class="card-img-top" src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg" alt="Card image" />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">Some example text.</p>
                {/* <Link to='' class="btn btn-primary">See Profile</Link> */}
              </div>
              <div className='bottom-btn'>
              <Link to='/edit-movies' class="btn btn-warning">edit</Link>
                <button class="btn btn-success">delete</button>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Home