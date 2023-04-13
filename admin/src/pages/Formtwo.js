import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const URL = "http://localhost:5000/api/v1";

const Formtwo = () => {
  const { id } = useParams();
  const initialState = {
    yearOfPassing10th: "",
    school10th: "",
    board10th: "",
    rollNo10th: "",
    subject1_10th: "",
    marks1_10th: "",
    subject2_10th: "",
    marks2_10th: "",
    subject3_10th: "",
    marks3_10th: "",
    subject4_10th: "",
    marks4_10th: "",
    subject5_10th: "",
    marks5_10th: "",

    totalMarks10th: "",
    percentage10th: "",
    yearOfPassing12th: "",
    school12th: "",
    board12th: "",
    rollNo12th: "",
    subject1_12th: "",
    marks1_12th: "",
    subject2_12th: "",

    marks2_12th: "",
    subject3_12th: "",
    marks3_12th: "",
    subject4_12th: "",
    marks4_12th: "",
    subject5_12th: "",
    marks5_12th: "",
    totalMarks12th: "",
    percentage12th: "",
  };
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [localStorageValue, SetlocalStorageValue] = useState("");
  const {
    yearOfPassing10th,
    school10th,
    board10th,
    rollNo10th,
    subject1_10th,
    marks1_10th,
    subject2_10th,
    marks2_10th,
    subject3_10th,
    marks3_10th,
    subject4_10th,
    marks4_10th,
    subject5_10th,
    marks5_10th,
    totalMarks10th,
    percentage10th,
    yearOfPassing12th,
    school12th,
    board12th,
    rollNo12th,
    subject1_12th,
    marks1_12th,
    subject2_12th,
    marks2_12th,
    subject3_12th,
    marks3_12th,
    subject4_12th,
    marks4_12th,
    subject5_12th,
    marks5_12th,
    percentage12th,
    totalMarks12th,
  } = values;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const AddData = async (userData) => {
    alert();
    // const add = await axios.post(`${URL}/users/login`, userData);
    // setLoginTextChange("Please Wait...");
    try {
      const add = await axios.post(
        `${URL}/formeducation/AddFormData2/${id}`,
        userData
      );
      if (add.status === 201) {
        const okcheck = await add.data;
        console.log(okcheck);
        localStorage.setItem("token", okcheck.token);
        SetlocalStorageValue(localStorage.getItem("token"));
        // const config = {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //     "Content-Type": "application/json",
        //   },
        // };
        toast.success("Successfully ...");
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
      yearOfPassing10th,
      school10th,
      board10th,
      rollNo10th,
      subject1_10th,
      marks1_10th,
      subject2_10th,
      marks2_10th,
      subject3_10th,
      marks3_10th,
      subject4_10th,
      marks4_10th,
      subject5_10th,
      marks5_10th,
      totalMarks10th,
      percentage10th,
      yearOfPassing12th,
      school12th,
      board12th,
      rollNo12th,
      subject1_12th,
      marks1_12th,
      subject2_12th,
      marks2_12th,
      subject3_12th,
      marks3_12th,
      subject4_12th,
      marks4_12th,
      subject5_12th,
      marks5_12th,
      percentage12th,
      totalMarks12th,
    } = values;

    if (
      !yearOfPassing10th ||
      !school10th ||
      !board10th ||
      !rollNo10th ||
      !subject1_10th ||
      !marks1_10th ||
      !subject2_10th ||
      !marks2_10th ||
      !subject3_10th ||
      !marks3_10th ||
      !subject4_10th ||
      !marks4_10th ||
      !subject5_10th ||
      !marks5_10th ||
      !totalMarks10th ||
      !percentage10th ||
      !yearOfPassing12th ||
      !school12th ||
      !board12th ||
      !rollNo12th ||
      !subject1_12th ||
      !marks1_12th ||
      !subject2_12th ||
      !marks2_12th ||
      !subject3_12th ||
      !marks3_12th ||
      !subject4_12th ||
      !marks4_12th ||
      !subject5_12th ||
      !marks5_12th ||
      !totalMarks12th ||
      !percentage12th
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    // if (1 > 10) {
    //   toast.error("Please Enter Less Number . Not More Then 10 Digit");
    //   return;
    // }

    const add1 = AddData(values);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-2">Educational Info</h3>
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <form onSubmit={onSubmit}>
              <div className="mb-3 mt-3">
                <label for="Yearofpassing" className="form-label">
                  Year Of Passing 10th
                </label>
                <select
                  class="form-select"
                  name="yearOfPassing10th"
                  value={yearOfPassing10th}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="school10th" className="form-label">
                  School 10th:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="school10th"
                  placeholder="Enter school Name 10th "
                  name="school10th"
                  value={school10th}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="board10th" className="form-label">
                  Board 10th :
                </label>
                <select
                  class="form-select"
                  name="board10th"
                  value={board10th}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="MP_BOARD">MP_BOARD </option>
                  <option value="CBSE">CBSE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="rollNo10th" className="form-label">
                  Roll No 10th:
                </label>
                <input
                  type="text"
                  value={rollNo10th}
                  className="form-control"
                  id="rollNo10th"
                  placeholder="Enter Roll No 10th"
                  name="rollNo10th"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  Subject Details 10Th
                </label>
                <fieldset class="ui-grid-a">
                  <div class="ui-block-a d-flex justify-content-between">
                    Subject 1:
                    <input
                      type="text"
                      id="subject1_10th"
                      value={subject1_10th}
                      placeholder="Enter subject 1"
                      name="subject1_10th"
                      required
                      onChange={handleChange}
                    />
                    Marks 1:{" "}
                    <input
                      type="number"
                      id="marks1_10th"
                      value={marks1_10th}
                      placeholder="Enter Marks 1"
                      name="marks1_10th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 2 :{" "}
                    <input
                      type="text"
                      value={subject2_10th}
                      id="subject2_10th"
                      placeholder="Enter subject 2"
                      name="lastname"
                      required
                      onChange={handleChange}
                    />
                    Marks 2 :{" "}
                    <input
                      type="number"
                      id="marks2_10th"
                      value={marks2_10th}
                      placeholder="Enter Marks 2"
                      name="marks2_10th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 3 :{" "}
                    <input
                      type="text"
                      value={subject3_10th}
                      id="subject3_10th"
                      placeholder="Enter subject 3"
                      name="subject3_10th"
                      required
                      onChange={handleChange}
                    />
                    Marks 3 :{" "}
                    <input
                      type="number"
                      id="marks3_10th"
                      value={marks3_10th}
                      placeholder="Enter Marks 3"
                      name="marks3_10th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 4 :{" "}
                    <input
                      type="text"
                      value={subject4_10th}
                      id="subject4_10th"
                      placeholder="Enter subject 4"
                      name="subject4_10th"
                      required
                      onChange={handleChange}
                    />
                    Marks 4 :{" "}
                    <input
                      type="number"
                      id="marks4_10th"
                      value={marks4_10th}
                      placeholder="Enter Marks 4"
                      name="marks4_10th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 5 :{" "}
                    <input
                      type="text"
                      value={subject5_10th}
                      id="subject5_10th"
                      placeholder="Enter subject 5"
                      name="subject5_10th"
                      required
                      onChange={handleChange}
                    />
                    Marks 5:{" "}
                    <input
                      type="number"
                      id="marks5_10th"
                      value={marks5_10th}
                      placeholder="Enter Marks 5"
                      name="marks5_10th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between"></div>
                </fieldset>
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  totalMarks10th:
                </label>
                <input
                  value={totalMarks10th}
                  type="number"
                  className="form-control"
                  id="totalMarks10th"
                  placeholder="Enter totalMarks10th"
                  name="totalMarks10th"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  Percentage 10th:
                </label>
                <input
                  value={percentage10th}
                  type="text"
                  className="form-control"
                  id="percentage10th"
                  placeholder="Enter percentage10th"
                  name="percentage10th"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* for 12th */}

              <div className="mb-3 mt-3">
                <label for="Yearofpassing" className="form-label">
                  Year Of Passing 12th
                </label>
                <select
                  class="form-select"
                  name="yearOfPassing12th"
                  value={yearOfPassing12th}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="school12th" className="form-label">
                  School 12th:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="school12th"
                  placeholder="Enter school Name 12th "
                  name="school12th"
                  value={school12th}
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 mt-3">
                <label for="board10th" className="form-label">
                  Board 12th :
                </label>
                <select
                  class="form-select"
                  name="board12th"
                  value={board12th}
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="MP_BOARD">MP_BOARD </option>
                  <option value="CBSE">CBSE</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </div>

              <div className="mb-3 mt-3">
                <label for="rollNo10th" className="form-label">
                  Roll No 10th:
                </label>
                <input
                  type="text"
                  value={rollNo12th}
                  className="form-control"
                  id="rollNo12th"
                  placeholder="Enter Roll No 12th"
                  name="rollNo12th"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  Subject Details 12Th
                </label>
                <fieldset class="ui-grid-a">
                  <div class="ui-block-a d-flex justify-content-between">
                    Subject 1:
                    <input
                      type="text"
                      id="subject1_12th"
                      value={subject1_12th}
                      placeholder="Enter subject 1"
                      name="subject1_12th"
                      required
                      onChange={handleChange}
                    />
                    Marks 1:{" "}
                    <input
                      type="number"
                      id="marks1_12th"
                      value={marks1_12th}
                      placeholder="Enter Marks 1"
                      name="marks1_12th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 2 :{" "}
                    <input
                      type="text"
                      value={subject2_12th}
                      id="subject2_12th"
                      placeholder="Enter subject 2"
                      name="subject2_12th"
                      required
                      onChange={handleChange}
                    />
                    Marks 2 :{" "}
                    <input
                      type="number"
                      id="marks2_12th"
                      value={marks2_12th}
                      placeholder="Enter Marks 2"
                      name="marks2_12th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 3 :{" "}
                    <input
                      type="text"
                      value={subject3_12th}
                      id="subject3_12th"
                      placeholder="Enter subject 3"
                      name="subject3_12th"
                      required
                      onChange={handleChange}
                    />
                    Marks 3 :{" "}
                    <input
                      type="number"
                      id="marks3_12th"
                      value={marks3_12th}
                      placeholder="Enter Marks 3"
                      name="marks3_12th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 4 :{" "}
                    <input
                      type="text"
                      value={subject4_10th}
                      id="subject4_12th"
                      placeholder="Enter subject 4"
                      name="subject4_12th"
                      required
                      onChange={handleChange}
                    />
                    Marks 4 :{" "}
                    <input
                      type="number"
                      id="marks4_12th"
                      value={marks4_12th}
                      placeholder="Enter Marks 4"
                      name="marks4_12th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between">
                    {" "}
                    Subject 5 :{" "}
                    <input
                      type="text"
                      value={subject5_12th}
                      id="subject5_12th"
                      placeholder="Enter subject 5"
                      name="subject5_12th"
                      required
                      onChange={handleChange}
                    />
                    Marks 5:{" "}
                    <input
                      type="number"
                      id="marks5_12th"
                      value={marks5_10th}
                      placeholder="Enter Marks 5"
                      name="marks5_12th"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div class="ui-block-a d-flex justify-content-between"></div>
                </fieldset>
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  totalMarks12th:
                </label>
                <input
                  value={totalMarks12th}
                  type="number"
                  className="form-control"
                  id="totalMarks12th"
                  placeholder="Enter totalMarks12th"
                  name="totalMarks12th"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 mt-3">
                <label for="lastname" className="form-label">
                  Percentage 12th:
                </label>
                <input
                  value={percentage12th}
                  type="number"
                  className="form-control"
                  id="percentage12th"
                  placeholder="Enter percentage10th"
                  name="percentage12th"
                  required
                  onChange={handleChange}
                />
              </div>

              {/* <div className="mb-3 mt-3">
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
              </div> */}

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

export default Formtwo;
