import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./loginandsignup/login";
import Signup from "./loginandsignup/signup";
import Home from "./home/home";
import store from "../store";
import history from "../history";
import { ConnectedRouter } from "react-router-redux";
import { syncHistoryWithStore } from "react-router-redux";

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </div>
        </Router>
      </Provider>
    );
  }
}
