import React from "react";

export class LoginP extends React.Component{
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
