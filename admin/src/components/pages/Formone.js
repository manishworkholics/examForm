import React from "react";

const Formone = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="text-center mt-2">Basic Info</h3>
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <form action="/action_page.php">
              <div className="mb-3 mt-3">
                <label for="fname" className="form-label">
                  First name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter First Name"
                  name="name"
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

              <div class="mb-3">
                <label for="pwd" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter password"
                  name="pswd"
                  required
                />
              </div>
            </form>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Formone;
