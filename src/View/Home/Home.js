import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
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
        <h2>Home Page</h2>
        {localStorage.getItem("role") === "user"? (
          <button className="btn btn-warning" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
};

export default Home;
