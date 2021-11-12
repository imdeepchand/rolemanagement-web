import React, { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogout: false,
      role: localStorage.getItem("role")
    }
  }
   logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({isLogout: true});
  };
  render() {
  if (this.state.isLogout) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <h1>Site Under Developement!</h1>
        <h2>Home Page</h2>
        {this.state.role === "user"? (
          <button className="btn btn-primary" onClick={this.logoutHandler}>
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
};
}

export default Home;
