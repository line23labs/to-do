import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */
  render() {
    return <div>Welcome to React</div>;
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));


/**
 *  Application Component
 */
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className = 'root-container'>

        <div className = 'box-container'>
          <div className = 'controller'>
      Login
          </div>
          <div className = 'controller'>
      Register
          </div>
        </div>

        <div className = 'box-container'>

        </div>

      </div>
    );
  }
}
ReactDOM.render(<MyApp/>, document.getElementById('app'));

/**
 * Application Component
 */
class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitLogin(event) {

  }

  render() {
    return (
      <div className = 'inner-xontainer'>
        <div className = 'header'>
    Login
        </div>

        <div className = 'box'>
          <div className = 'input-group'>
            <label htmlFor = 'username'>Username</label>
            <input type = 'text' name = 'username' className = 'login-input' placeholder = 'username'/>
          </div>

          <div className = 'input-group'>
            <label htmlFor = 'password'>Passwprd</label>
            <input type = 'password' name = 'password' className = 'login-input' placeholder = 'password'/>
          </div>

          <button type = 'button' className = 'login-btn' onClick = {this.submitLogin.bind(this)}>Login</button>

        </div>
      </div>
    );
  }
}
ReactDOM.render(<LoginBox/>, document.getElementById('app'));

/**
 * Application Component
 */
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  submitRegister(event) {

  }

  render() {
    return (
      <div className = 'inner-xontainer'>
        <div className = 'header'>
    Register
        </div>

        <div className = 'box'>
          <div className = 'input-group'>
            <label htmlFor = 'username'>Username</label>
            <input type = 'text' name = 'username' className = 'login-input' placeholder = 'username'/>
          </div>

          <div className = 'input-group'>
            <label htmlFor = 'password'>Passwprd</label>
            <input type = 'password' name = 'password' className = 'login-input' placeholder = 'password'/>
          </div>

          <button type = 'button' className = 'login-btn' onClick = {this.submitRegister.bind(this)}>Register</button>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<Register/>, document.getElementById('app'));


