import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL = "http://localhost:5000/api/v1";

const Formone = () => {
  const initialState = {
    fname: "",
    mname: "",
    lname: "",
    email: "",
    contact: "",
    houseno: "",
    road: "",
    city: "",
    pincode: "",
    dob: "",
    fathername: "",
    mothername: "",
    gender: "",
    maritalstatus: "",
    disability: "",
    category: "",
    domicile: "",
    cast: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [localStorageValue, SetlocalStorageValue] = useState("");
  const {
    fname,
    mname,
    lname,
    email,
    contactcountry,
    contactnumber,
    houseno,
    road,
    city,
    pincode,
    dob,
    fathername,
    mothername,
    gender,
    maritalstatus,
    disability,
    category,
    domicile,
    cast,
  } = values;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const AddData = async (userData) => {
    // const add = await axios.post(`${URL}/users/login`, userData);
    // setLoginTextChange("Please Wait...");
    try {
      const add = await axios.post(`${URL}/users/login`, userData);
      if (add.status == 200) {
        const okcheck = await add.data;
        console.log(okcheck);
        localStorage.setItem("token", okcheck.token);
        SetlocalStorageValue(localStorage.getItem("token"));
        toast.success("LoginSuccessful...");
        navigate("/form-two");
      }
    } catch (error) {
      // setLoginClick('');
      toast.error("Invalid Credintials...");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      fname,
      mname,
      lname,
      email,
      contactcountry,
      contactnumber,
      houseno,
      road,
      city,
      pincode,
      dob,
      fathername,
      mothername,
      gender,
      maritalstatus,
      disability,
      category,
      domicile,
      cast,
    } = values;
    if (
      !fname ||
      !lname ||
      !email ||
      !contactcountry ||
      !contactnumber ||
      !houseno ||
      !road ||
      !city ||
      !pincode ||
      !dob ||
      !fathername ||
      !mothername ||
      !gender ||
      !maritalstatus ||
      !disability ||
      !category ||
      !domicile ||
      !cast
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    if (contactnumber.length > 10) {
      toast.error("Please Enter Less Number . Not More Then 10 Digit");
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
                  value={fname}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="mname" className="form-label">
                  Middle name:
                </label>
                <input
                  type="text"
                  value={mname}
                  className="form-control"
                  id="mname"
                  placeholder="Enter Middle Name"
                  name="mname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lname" className="form-label">
                  Last name:
                </label>
                <input
                  value={lname}
                  type="text"
                  className="form-control"
                  id="lname"
                  placeholder="Enter Last Name"
                  name="lname"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="email" className="form-label">
                  email:
                </label>
                <input
                  value={email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="number" className="form-label">
                  Contact:
                </label>
              </div>
              <div class="input-group mb-3 input-group-sm">
                <span class="input-group-text">
                  <select
                    class="form-select"
                    name="contactcountry"
                    value={contactcountry}
                    onChange={handleChange}
                  >
                    <option value="">+91</option>
                    <option value="">+92</option>
                  </select>
                </span>
                <input
                  type="text"
                  class="form-control"
                  name="contactnumber"
                  value={contactnumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="houseno" className="form-label">
                  Address:
                </label>
                <input
                  value={houseno}
                  type="text"
                  className="form-control"
                  id="houseno"
                  placeholder="House No"
                  name="houseno"
                  required
                  onChange={handleChange}
                />
                <input
                  value={road}
                  type="text"
                  className="form-control mt-3"
                  id="road"
                  placeholder="Road"
                  name="road"
                  required
                  onChange={handleChange}
                />
                <input
                  value={city}
                  type="text"
                  className="form-control mt-3"
                  id="city"
                  placeholder="City"
                  name="city"
                  required
                  onChange={handleChange}
                />
                <input
                  value={pincode}
                  type="number"
                  className="form-control mt-3"
                  id="pincode"
                  placeholder="Pin-Code"
                  name="pincode"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="dob" className="form-label">
                  Date of Birth:
                </label>
                <input
                  value={dob}
                  type="date"
                  className="form-control"
                  id="calander"
                  placeholder="Enter Dob"
                  name="dob"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="fathername" className="form-label">
                  Father Name:
                </label>
                <input
                  value={fathername}
                  type="text"
                  className="form-control"
                  id="fathername"
                  placeholder="Enter Father Name"
                  name="fathername"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="name" className="form-label">
                  Mother Name:
                </label>
                <input
                  value={mothername}
                  type="text"
                  className="form-control"
                  id="mothername"
                  placeholder="Enter Mother Name"
                  name="mothername"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="gender" className="form-label">
                  Gender :
                </label>
                <select
                  class="form-select"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="maritalstatus" className="form-label">
                  Marital Status :
                </label>
                <select
                  class="form-select"
                  name="maritalstatus"
                  value={maritalstatus}
                  onChange={handleChange}
                >
                  <option value="married">Married</option>
                  <option value="unmarried" selected>
                    Un Married
                  </option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="disability" className="form-label">
                  Disability :
                </label>
                <select
                  class="form-select"
                  name="disability"
                  value={disability}
                  onChange={handleChange}
                >
                  <option value="yes">Yes</option>
                  <option value="no" selected>
                    No
                  </option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="category" className="form-label">
                  category :
                </label>
                <select
                  class="form-select"
                  name="category"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="general">General </option>
                  <option selected value="GENERAL">
                    General
                  </option>
                  <option value="OBC">OBC</option>
                  <option value="ST">ST</option>
                  <option value="SC">SC</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>
              <div className="mb-3 mt-3">
                <label for="domicile" className="form-label">
                  Domicile :
                </label>
                <select
                  class="form-select"
                  name="domicile"
                  value={domicile}
                  onChange={handleChange}
                >
                  <option value="MP">MP </option>
                  <option value="OTHER" selected>
                    OTHER
                  </option>
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="cast" className="form-label">
                  cast :
                </label>
                <select
                  class="form-select"
                  name="cast"
                  value={cast}
                  onChange={handleChange}
                >
                  <option selected value="GENERAL">
                    General{" "}
                  </option>
                  <option value="OBC">OBC</option>
                  <option value="ST">ST</option>
                  <option value="SC">SC</option>
                </select>
              </div>
              <button className="btn btn-primary mb-2 w-100" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Formone;
