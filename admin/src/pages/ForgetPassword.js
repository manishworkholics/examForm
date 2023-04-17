import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FormRow from "../components/FormRow";
import logo from "../assets/logodavv.png";
import Img1 from "../assets/logodavv.png";
const initialState = {
  email: "",
  password: "",
};
const ForgetPassword = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [localStorageValue, SetlocalStorageValue] = useState("");
  const [loginclick, setLoginClick] = useState("");
  // const[loginTextchange,setLoginTextChange]=useState("Login");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const AddData = async (userData) => {
    setLoginClick("1");
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

        navigate("/exam");
      }
    } catch (error) {
      setLoginClick("");
      toast.error("Invalid Credintials...");
    }
    // if (add.status == 200) {
    //   const okcheck = await add.data;
    //   console.log(okcheck);
    //   localStorage.setItem("token", okcheck.token);
    //   SetlocalStorageValue(localStorage.getItem("token"));
    //   toast.success("LoginSuccessful...");

    //   navigate("/exam");
    //   setCount(1);
    // }
    // if (add.status === 400) {
    //   alert()
    //   setLoginClick('');
    //   toast.error("Invalid Credintials...");
    // }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please fill out all fields");
      return;
    }
    const add1 = AddData(values);
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4 middleform">
            <h2 className="">Forget Password</h2>
            {/* <div className="forminsideimg ">
              <img src={logo} alt="image" className="w-100" />
            </div> */}
            <div className=" d-flex ">
              <form className=" loginform " onSubmit={onSubmit}>
                <FormRow
                  type="email"
                  name="email"
                  value={values.email}
                  handleChange={handleChange}
                  labelText="Enter Email"
                />
                <FormRow
                  type="number"
                  name="phone"
                  value={values.phone}
                  handleChange={handleChange}
                  labelText="Enter Mobile Number"
                />
                {/* <div class=" formcked">
                  <div>
                    {" "}
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <div>
                    {" "}
                    <a class="forgot" href="">
                      Forgot Password?
                    </a>
                  </div>
                </div> */}
                <button type="submit" className="custombutton">
                  {loginclick !== "" ? "Please Wait ..." : "Submit"}
                </button>
              </form>
            </div>
            {/* <div className="newregister">
              New User ? &nbsp;&nbsp;
              <Link to="/register">
                <span > Register Here</span>
              </Link>
            </div> */}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
