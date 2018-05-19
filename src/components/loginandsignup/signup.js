import React from "react";
import { findDOMNode } from "react-dom";
import axios from "axios";
import "./login.css";

export default class Signup extends React.Component {
  componentDidMount() {
    document
      .getElementById("signupform")
      .addEventListener("submit", function(e) {
        e.preventDefault();
      });
  }
  submit() {
    let email = findDOMNode(this.refs.email).value;
    let username = findDOMNode(this.refs.username).value;
    let password = findDOMNode(this.refs.password).value;
    console.log(
      JSON.stringify({
        email: email,
        username: username,
        password: password
      })
    );
    fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({
        email: email,
        username: username,
        password: password
      }),
      headers: {
        "user-agent": "Mozilla/4.0 MDN Example",
        "content-type": "application/json"
      }
    })
      .then(resp => {
        console.log(resp);
        resp.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div class="login">
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
              class="btn btn-primary btn-block btn-large">
              Let me in.
            </button>
          </form>
        </div>
      </div>
    );
  }
}
