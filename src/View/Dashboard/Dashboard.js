import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Dashboard extends Component{
  // const [isLogout, setLogout] = React.useState(false);
  constructor(props) {
    super(props);
    this.state= {
      isLogout: false
    }
  }
   logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({isLogout:true});
  };
  render() {
  if (this.state.isLogout) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>Site Under Developement!</h1>
        <h2>Admin Dashboard</h2>
        <button className="btn btn-primary" onClick={this.logoutHandler}>
          Logout
        </button>
      </div>
    );
  }
};
}

export default Dashboard;
