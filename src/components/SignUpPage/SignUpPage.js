import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

export class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {
        FirstName: "",
        LastName: "",
        Email: "",
        Username: "",
        Password: "",
        ConfirmPassword: ""
      }
    };
  }
  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  }
  formHandler(formFields) {
    axios
      .post("/api/register/user", formFields)
      .then(function(response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-50 p-r-50 p-t-40 p-b-30">
            <form
              action="/api/register/user"
              onSubmit={this.formHandler(this.state.formFields)}
              method="post"
              className="login100-form"
            >
              <span className="signup100-form-title p-b-20">
                <strong>SignUp</strong>
              </span>

              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.FirstName}
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  required
                ></input>
              </div>

              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.LastName}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                ></input>
              </div>
              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.Email}
                  type="text"
                  name="Email"
                  placeholder="email"
                  required="ex@abc.xyz"
                ></input>
              </div>
              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.Username}
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                ></input>
              </div>

              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.Password}
                  type="Password"
                  name="pass"
                  placeholder="Password"
                ></input>
              </div>
              <div className="wrap-input100">
                <input
                  className="input100"
                  onChange={e => this.inputChangeHandler.call(this, e)}
                  value={this.state.formFields.ConfirmPassword}
                  type="Password"
                  name="pass"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <div className="container-login100-form-btn p-t-25">
                <button className="SignUp100-form-btn">SignUp</button>
              </div>
              <div className="text-center w-full p-t-42 p-b-22">
                <span className="txt1">Or SignUp with</span>
              </div>
              <a href="#" className="m-b-10">
                Facebook
              </a>

              <a href="#" className="m-b-10">
                Google
              </a>
              <div className="text-center w-full p-t-115">
                <span className="txt1 ">Have an account already?</span>

                <a className="txt1 bo1 hov1 text-center" href="./Login">
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
