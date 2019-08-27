import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class SignUp extends React.Component {
  render() {
    return (

      <div class = 'limiter'>
        <div id="signup">
          <form role="form" method="post" className = 'form-group'>
          <span class="login100-form-title p-b-55">
						<strong>SignUp</strong>
					</span>

            <div>
              <label> First Name:</label>
              <input type="text" id="first" name="First Name"  className = 'input'required />
            </div>

            <div>
              <label>Last Name:</label>
              <input type="text" id="last" name="Last Name" className = 'input' required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" id="email" name="Email" className = 'input' required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" id="password" name="Password" className = 'input' required />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input type="password" id="confirm" name="Confirm Password" className = 'input'required/>
            </div>
            <div>
              <button id="send" type="submit" class = 'SignUp'> Signup </button>
            </div>

              <a href="Login">Create an account</a>

          </form>
        </div>
      </div>
    );
  }
}
