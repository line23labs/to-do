import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class SignUp extends React.Component {
  render() {
    return (
      <div className = "limiter">
      <div className = "container-login100">
        <div className = 'wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30'>
          <form role="form" method="post" className="signup100-form validate-form">
            <span class="signup100-form-title p-b-55">
              <strong>SignUp</strong>
            </span>

            <div className = 'wrap-input100'>
              <input className = 'input100'
                type="text"
                name="FirstName"
                placeholder="First Name"
                required
              ></input>
              <span className = "focus-input100"></span>
            </div>

            <div className = 'wrap-input100'>
              <input className = 'input100'
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              ></input>
              <span className = "focus-input100"></span>
            </div>

            <div className = 'wrap-input100'>
              <input className = 'input100'
                type="text"
                name="Email"
                placeholder="email"
                required = 'ex@abc.xyz'
              ></input>
              <span className = "focus-input100"></span>
              <span className = "symbol-input100">
                <span className = "lnr lnr-envelope"></span>
              </span>
            </div>
            <div className = 'wrap-input100'>
              <input className = 'input100' type="text" name="pass" placeholder="Password"></input>
              <span className = "focus-input100"></span>
              <span className = "symbol-input100">
                <span className = "lnr lnr-lock"></span>
              </span>
            </div>
            <div className = 'wrap-input100'>
              <input className = 'input100'
                type="text"
                name="pass"
                placeholder="Confirm Password"
              ></input>
              <span className = "focus-input100"></span>
              <span className = "symbol-input100">
                <span className = "lnr lnr-lock"></span>
              </span>
            </div>
            <div className = "container-login100-form-btn p-t-25">
              <button className = "SignUp100-form-btn">SignUp</button>
            </div>
            <div className = "text-center w-full p-t-42 p-b-22">
              <span className = "txt1">Or SignUp with</span>
            </div>
            <div className = "text-center w-full p-t-115">
              <span className = "txt1 ">Have an account already?</span>

              <a className = "txt1 bo1 hov1 text-center" href="./Login">
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
