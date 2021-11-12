import React, { Component } from "react";
import "../../Assets/scss/Login.scss";
import { ToastContainer } from "react-toastify";
import { Success, Error } from "../Toast/ToastNotify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import HttpServices from "../../Services/HttpServices";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: false,
      role: "",
    };
  }
  inputHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({ [name]: value });
  };
  callApi = async (e) => {
    e.preventDefault();
    var url = "login";
    var data = {
      email: this.state.email,
      password: this.state.password,
    };
    await HttpServices.postWithoutHeaders(url, data)
      .then((res) => {
        if (res.status == 200) {
          this.setState({isLogedIn: true});
          Success(res.data.msg);
          this.setState({role: res.data.data.user[0].role});
          localStorage.setItem("role", res.data.data.user[0].role);
          localStorage.setItem("token", res.data.data.token);
        } else {
          this.setState({isLogedIn: false});
          Error(res.data.msg);
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    if (this.state.isLogedIn && this.state.role === "admin") {
      return <Redirect to="/dashboard" />;
    } else if (this.state.isLogedIn && this.state.role === "user") {
      return <Redirect to="/" />;
    } else {
    return (
      <>
        {" "}
        <div className="dis-flex">
          <>
            <form onSubmit={this.callApi} className="width400">
              <h1>Login Form</h1>
              <div>
                <input type="email" onChange={this.inputHandler} className="" name="email" placeholder="Email"/>
              </div>
              <div>
                <input type="password" onChange={this.inputHandler} className="" name="password" placeholder="Password"/>
              </div>
              <div>
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <a href="#">Register?</a>
          </>
        </div>
        <ToastContainer />
      </>
    );
  }
  }
}

export default Login;
