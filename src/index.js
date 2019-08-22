import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from './components/SignUp';
import 'admin-lte/dist/css/AdminLTE.css';

/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */
  render() {
    return (
      <div>
        <Login></Login>
      </div>);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

class LoginP extends React.Component{
  getInitialState() {
    return { signup: false, login: true };
  }
  switch(word) {
    var signup, login;
    if (word == "signup") {
      signup = true;
      login = false;
    } else {
      login = true;
      signup = false;
    }
    return this.setState({ login: login, signup: signup });
  }
  render() {
    var self = this;
    return (
      <div>
        <div id="buttons">
          <p
            id="signupButton"
            onClick={self.switch.bind(null, "signup")}
            className={self.state.signup ? "red" : "LightBlue"}
          >
            Sign In
          </p>
          <p
            id="loginButton"
            onClick={self.switch.bind(null, "login")}
            className={self.state.login ? "red" : "LightBlue"}
          >
            Login
          </p>
        </div>

        {self.state.signup ? <Signup /> : null}
        {self.state.login ? <Login /> : null}
      </div>
    );
  }
};

ReactDOM.render(<LoginP />, document.getElementById('LoginPage'));
class SignUp extends React.Component{
  render() {
    return (
      <div>
        <div id="signup">
          <input type="text" id="first" placeholder="First Name" />
          <input type="text" id="last" placeholder="Last Name" />
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <input type="password" id="confirm" placeholder="Confirm Password" />
          <button id="send">Send</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<SignUp />, document.getElementById('LoginPage'));
class Login extends React.Component{
  render() {
    return (
      <div>
        <div id="login">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
          <button id="send">Send</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Login />, document.getElementById('LoginPage'));
