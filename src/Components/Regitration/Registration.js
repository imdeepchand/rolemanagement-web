import React, { Component } from "react";
import HttpServices from "../../Services/HttpServices";
import "../../Assets/scss/Login.scss";
import { ToastContainer } from "react-toastify";
import { Success, Error } from "../Toast/ToastNotify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Registration extends Component {
  render() {
    return (
      <>
        <div className="dis-flex">
          <>
            <form className="width400">
              <h1>Registration Form</h1>
              <div>
                <input
                  type="text"                  
                  className=""
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Mobile No."
                />
              </div>
              <div>
                <input
                  type="text"                  
                  className=""
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
            <a href="#">Go to Home?</a>
          </>
        </div>
        <ToastContainer />
      </>
    );
  }
}

export default Registration;
