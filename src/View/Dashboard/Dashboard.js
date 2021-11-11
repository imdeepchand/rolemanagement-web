import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Dashboard = () => {
  const [isLogout, setLogout] = React.useState(false);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    setLogout(true);
  };
  if (isLogout) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>Site Under Developement!</h1>
        <h2>Admin Dashboard</h2>
        <button className="btn btn-warning" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    );
  }
};

export default Dashboard;
