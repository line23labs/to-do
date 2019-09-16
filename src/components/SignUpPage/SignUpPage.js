import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { RegisterLogo } from "../RegisterLogo";
import { SignUpForm } from "../SignUpForm";
import { Login } from "../Login";

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

    document.body.className =
      document.body.className + " hold-transition register-page";
  }

  render() {
    return (
      <div className="register-box">
        <RegisterLogo text="SIGNUP" />
        <SignUpForm />
        <Login/>
      </div>
    );
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
}
