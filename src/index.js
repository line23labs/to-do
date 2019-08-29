import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { LoginPage } from "./components/LoginPage";
import { SignUp } from "./components/SignUp";
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
        {" "}
        <SignUp></SignUp>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
