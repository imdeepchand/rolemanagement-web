import React, { Component } from "react";
import HttpServices from "../../Services/HttpServices";
import "../../Assets/scss/Login.scss";
import { ToastContainer } from "react-toastify";
import { Success, Warning, Error } from "../Toast/ToastNotify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "user" };
  }

  inputHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  };
  formSubmit = async (e) => {
    e.preventDefault();
    var url = "create-user";
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role,
    };
    await HttpServices.postWithoutHeaders(url, data)
      .then((res) => {
        if (res.status === 201) {
          Success(res.data.msg);
        } else {
          Warning(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <div className="dis-flex">
          <>
            <form className="width400" onSubmit={this.formSubmit}>
              <h1>Registration Form</h1>
              <div>
                <input
                  type="text"
                  className=""
                  name="name"
                  placeholder="Name"
                  onChange={this.inputHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  name="email"
                  placeholder="Email"
                  onChange={this.inputHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  name="password"
                  placeholder="Password"
                  onChange={this.inputHandler}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  name="cpassword"
                  placeholder="Confirm Password"
                  onChange={this.inputHandler}
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
