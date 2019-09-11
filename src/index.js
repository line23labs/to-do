import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { LoginPage } from "./components/LoginPage";
import { SignUpPage } from "./components/SignUpPage";
import { Login } from "./components/Login";
import { CSS } from "./style.css";

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
        <SignUpPage/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
