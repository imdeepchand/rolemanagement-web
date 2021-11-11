import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Comoponents
import Login from "./Components/Login/Login";
import Registration from "./Components/Regitration/Registration";
import Dashboard from "./View/Dashboard/Dashboard";
import Home from "./View/Home/Home";
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <Switch>
      <Route path="/login" name="Login" render={props => <Login {...props}/>} />
      <Route path="/registor" name="Registration" render={props => <Registration {...props}/>} />
      <Route path="/dashboard" name="DashBoard" render={props => <Dashboard {...props}/>} />
      <Route path="/" name="Home" render={props => <Home {...props}/>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
