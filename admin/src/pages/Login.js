import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:4001/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("inavalid Crediantial");
    } else {
      window.alert("login successfully");
      sessionStorage.setItem('token', JSON.stringify(data.token));
      navigate('/');
    }
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>

            <form action="/action_page.php" className='mt-5' >
              <div class="mb-3 mt-3">
                <label for="email" class="form-label">Username:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div class="form-check mb-3">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                </label>
              </div>
              < Link to='/' class="btn btn-warning text-center" onClick={login}>Login</ Link >
            </form>


          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </>
  )
}

export default Login