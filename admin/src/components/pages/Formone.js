import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL = "http://localhost:5000/api/v1";

const Formone = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const AddData = async (userData) => {
    // setLoginClick("1");
    // const add = await axios.post(`${URL}/users/login`, userData);
    // setLoginTextChange("Please Wait...");
    try {
      const add = await axios.post(`${URL}/users/login`, userData);
      if (add.status == 200) {
        const okcheck = await add.data;
        console.log(okcheck);
        // localStorage.setItem("token", okcheck.token);
        // SetlocalStorageValue(localStorage.getItem("token"));
        // toast.success("LoginSuccessful...");

        navigate("/exam");
      }
    } catch (error) {
      // setLoginClick('');
      toast.error("Invalid Credintials...");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      // toast.error("Please fill out all fields");
      return;
    }
    const add1 = AddData(values);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-2">Basic Info</h3>
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="mb-3 mt-3">
                <label for="fname" className="form-label">
                  First name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="fname"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="mname" className="form-label">
                  Middle name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mname"
                  placeholder="Enter Middle Name"
                  name="mname"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lname" className="form-label">
                  Last name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Last Name"
                  name="lname"
                  required
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="email" className="form-label">
                  email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="number" className="form-label">
                  Contact:
                </label>
              </div>
              <div class="input-group mb-3 input-group-sm">
                <span class="input-group-text">
                  <select class="form-select">
                    <option>+91</option>
                    <option>+92</option>
                    <option>+93</option>
                    <option>+94</option>
                  </select>
                </span>
                <input type="text" class="form-control" />
              </div>
              <div className="mb-3 mt-3">
                <label for="lname" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="House No"
                  name="lname"
                  required
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  id="lname"
                  placeholder="Road"
                  name="lname"
                  required
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  id="lname"
                  placeholder="City"
                  name="lname"
                  required
                />
                <input
                  type="text"
                  className="form-control mt-3"
                  id="lname"
                  placeholder="Pin-Code"
                  name="lname"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="dob" className="form-label">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="calander"
                  placeholder="Enter Dob"
                  name="dob"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="fathername" className="form-label">
                  Father Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fathername"
                  placeholder="Enter Father Name"
                  name="fathername"
                  required
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="name" className="form-label">
                  Mother Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mothername"
                  placeholder="Enter Mother Name"
                  name="mothername"
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="gender" className="form-label">
                  Gender :
                </label>
                <select class="form-select">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="maritalstatus" className="form-label">
                  Marital Status :
                </label>
                <select class="form-select">
                  <option>Married</option>
                  <option selected>Un Married</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="disability" className="form-label">
                  Disability :
                </label>
                <select class="form-select">
                  <option>Yes</option>
                  <option selected>No</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="category" className="form-label">
                  category :
                </label>
                <select class="form-select">
                  <option>General </option>
                  <option selected>Obc</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="domicile" className="form-label">
                  Domicile :
                </label>
                <select class="form-select">
                  <option>India </option>
                  <option selected>Other</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="domicile" className="form-label">
                  Domicile :
                </label>
                <select class="form-select">
                  <option selected>India </option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="domicile" className="form-label">
                  Domicile :
                </label>
                <select class="form-select">
                  <option selected>India </option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="cast" className="form-label">
                  cast :
                </label>
                <select class="form-select">
                  <option selected>India </option>
                  <option>Other</option>
                </select>
              </div>
              <button className="btn btn-primary mb-2 w-100" type="submit">Submit</button>
            </form>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Formone;
