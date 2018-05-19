import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./loginandsignup/login";
import Signup from "./loginandsignup/signup";

export default () => {
  return (
    <Router>
      <div>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
};
