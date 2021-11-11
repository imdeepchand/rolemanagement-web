import React from "react";
import "../../Assets/scss/Login.scss";
import { ToastContainer } from "react-toastify";
import { Success, Error } from "../Toast/ToastNotify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import HttpServices from "../../Services/HttpServices";
const Login = () => {
  const [email, setEmail] = React.useState();
  const [pass, setPass] = React.useState();
  const [role, setRole] = React.useState();
  const [isLogedIn, SetLoginin] = React.useState(false);
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const callApi = async (e) => {
    e.preventDefault();
    var url = "login";
    var data = {
      email: email,
      password: pass,
    };
    await HttpServices.postWithoutHeaders(url, data)
      .then((res) => {
        console.log("res from login: ",res);
        if (res.status == 200) {
          SetLoginin(true);
          Success(res.data.msg);
          setRole(res.data.data.user[0].role);
          localStorage.setItem("role", res.data.data.user[0].role);
          localStorage.setItem("token", res.data.data.token);
        } else {
          SetLoginin(false);
          Error(res.data.msg);
        }        
      }).catch((err) => console.log(err));
  };
  if (isLogedIn && role === "admin") {
    return <Redirect to="/dashboard" />;
  } else if (isLogedIn && role === "user") {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        {" "}
        <div className="dis-flex">
          <>
            <form onSubmit={callApi} className="width400">
              <h1>Login Form</h1>
              <div>
                <input
                  type="email"
                  onChange={emailHandler}
                  className=""
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  onChange={passHandler}
                  className=""
                  placeholder="Password"
                />
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
};

export default Login;
