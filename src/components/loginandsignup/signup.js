import React from "react";
import { findDOMNode } from "react-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";
import "./login.css";
import { push } from "react-router-redux";

export default class Signup extends React.Component {
  constructor() {
    super();

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false,
      error: "hi i love you"
    };
  }

  componentDidMount() {
    document
      .getElementById("signupform")
      .addEventListener("submit", function(e) {
        e.preventDefault();
      });
  }
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  submit() {
    let email = findDOMNode(this.refs.email).value;
    let username = findDOMNode(this.refs.username).value;
    let password = findDOMNode(this.refs.password).value;
    if (!email || !username || !password) {
      return this.setState({ show: true, error: "Checkout all fields" });
    }
    axios
      .post("http://localhost:5000/signup", {
        email: email,
        username: username,
        password: password
      })
      .then(resp => {
        console.log(resp);
        if (resp.status == 200) {
          return console.log("success");
        }
        this.setState({
          error: "something went wrong, please try again later",
          show: true
        });
      })
      .catch(err => {
        let msg = err.response.data.error;
        console.log(err.response);
        this.setState({ error: msg, show: true });
      });
  }
  render() {
    return (
      <div>
        <div className="login">
          {this.state.show == true ? (
            <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
              {this.state.error}
            </Alert>
          ) : (
            <div />
          )}
          <h1>SignUp</h1>
          <form id="signupform" method="post">
            <input
              type="email"
              ref="email"
              name="email"
              placeholder="Email id"
              required="required"
            />
            <input
              type="text"
              ref="username"
              name="username"
              placeholder="Username"
              required="required"
            />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Password"
              required="required"
            />
            <button
              type="submit"
              onClick={this.submit.bind(this)}
              className="btn btn-primary btn-block btn-large">
              Let me in.
            </button>
          </form>
        </div>
      </div>
    );
  }
}
