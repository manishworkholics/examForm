import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URL = "http://localhost:4001/api/v1/basic-info";

const Formone = () => {
  const initialState = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
<<<<<<< HEAD:admin/src/components/pages/Formone.js
    phone: "",
    address: "",
    DOB: "",
=======
    contactcountry: "",
    contactnumber: "",
    houseno: "",
    street: "",
    city: "",
    pincode: "",
    dob: "",
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
  const {
    firstname,
    middlename,
    lastname,
    email,
<<<<<<< HEAD:admin/src/components/pages/Formone.js
    phone,
    address,
    DOB,
=======
    contactcountry,
    contactnumber,
    houseno,
    street,
    city,
    pincode,
    dob,
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js

    // const add = await axios.post(`${URL}/users/login`, userData);
    // setLoginTextChange("Please Wait...");
    try {
      const add = await axios.post(`${URL}`, userData);
      if (add.status == 200) {
=======
    alert();
    // const add = await axios.post(`${URL}/users/login`, userData);
    // setLoginTextChange("Please Wait...");
    try {
      const add = await axios.post(
        `${URL}/formeducation/AddFormData`,
        userData
      );
      if (add.status === 201) {
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
        const okcheck = await add.data;
        const okcheck2=okcheck.data;
        const getid_fromdata=okcheck2._id;
        console.log(okcheck);
<<<<<<< HEAD:admin/src/components/pages/Formone.js
        // localStorage.setItem("token", okcheck.token);
        // SetlocalStorageValue(localStorage.getItem("token"));
        // toast.success("LoginSuccessful...");

        navigate("/exam");
=======
         localStorage.setItem("token", okcheck.token);
         SetlocalStorageValue(localStorage.getItem("token"));
        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     "Content-Type": "application/json",
        //   },
        // };
        toast.success("Successfully ...");
        navigate(`/form-two/${getid_fromdata}`);
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
      }
    } catch (error) {
      // setLoginClick('');
      toast.error("Invalid Credintials...");
    }
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      middlename,
      lastname,
      email,
<<<<<<< HEAD:admin/src/components/pages/Formone.js
      phone,
      address,
      DOB,
=======
      contactcountry,
      contactnumber,
      houseno,
      street,
      city,
      pincode,
      dob,
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
      fathername,
      mothername,
      gender,
      maritalstatus,
      disability,
      category,
      domicile,
      cast,
    } = values;
<<<<<<< HEAD:admin/src/components/pages/Formone.js
    console.log(values);
=======

    if (
      !firstname ||
      !lastname ||
      !email ||
      !contactcountry ||
      !contactnumber ||
      !houseno ||
      !street ||
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

>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
                <label for="firstname" className="form-label">
                  First name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter First Name"
                  name="firstname"
                  value={firstname}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="middlename" className="form-label">
                  Middle name:
                </label>
                <input
                  type="text"
                  value={middlename}
                  className="form-control"
                  id="middlename"
                  placeholder="Enter Middle Name"
                  name="middlename"
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                  
=======
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  Last name:
                </label>
                <input
                  value={lastname}
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter Last Name"
                  name="lastname"
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
                  {/* <select
                    class="form-select"
                    name="contactcountry"
                    value={phone}
                    onChange={handleChange}
                  >
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                    <option value="">+91</option>
                    <option value="">+92</option>
                  </select> */}
=======
                    <option>Select</option>
                    <option value="91">+91</option>
                    <option value="92">+92</option>
                  </select>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
                </span>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="houseno" className="form-label">
                  Address:
                </label>
                <input
                  value={address}
                  type="text"
                  className="form-control"
                  id="houseno"
                  placeholder="House No"
                  name="address"
                  required
                  onChange={handleChange}
                />
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                {/* <input
                  value={road}
=======
                <input
                  value={street}
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
                  type="text"
                  className="form-control mt-3"
                  id="street"
                  placeholder="street"
                  name="street"
                  required
                  onChange={handleChange}
                /> */}
                {/* <input
                  value={city}
                  type="text"
                  className="form-control mt-3"
                  id="city"
                  placeholder="City"
                  name="city"
                  required
                  onChange={handleChange}
                /> */}
                {/* <input
                  value={pincode}
                  type="number"
                  className="form-control mt-3"
                  id="pincode"
                  placeholder="Pin-Code"
                  name="pincode"
                  required
                  onChange={handleChange}
                /> */}
              </div>
              <div className="mb-3 mt-3">
                <label for="dob" className="form-label">
                  Date of Birth:
                </label>
                <input
                  value={DOB}
                  type="date"
                  className="form-control"
                  id="calander"
                  placeholder="Enter Dob"
                  name="DOB"
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                  <option >Select</option>
                  <option  value="male">Male</option>
=======
                  <option>Select</option>
                  <option value="male">Male</option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                > <option >Select</option>

=======
                >
                  <option>Select</option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                > <option >Select</option>

=======
                >
                  <option>Select</option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                > <option >Select</option>

=======
                >
                  <option>Select</option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                > <option >Select</option>

=======
                >
                  <option>Select</option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
                 
                  value={cast}
                  onChange={handleChange}
                >
<<<<<<< HEAD:admin/src/components/pages/Formone.js
                  <option selected value="GENERAL" name="cast">
                    General{" "}
                  </option>
                  <option >Select</option>

=======
                  <option>Select</option>
                  <option value="GENERAL">General </option>
>>>>>>> a6d5c810e116afdf5ca5a47914008aa3eb17c219:admin/src/pages/Formone.js
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
