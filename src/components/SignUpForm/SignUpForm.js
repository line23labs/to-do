import React, { Component } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import { InputField } from "../InputField";
import { RegisterButton } from "../RegisterButton";
import { Login } from "../Login";

/**
 *
 *
 * @export
 * @class SignUpForm
 * @extends {Component}
 */
export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        fullName: "",
        Email: "",
        Username:'',
        Password: "",
        RetypePassword: ""
      }
    };
    this.handleFormFields = this.handleFormFields.bind(this);
  }

  render() {
    return (
      <Card>
        <Card.Body className="register-card-body">
          <p className="login-box-msg">Registration form for new members</p>
          <Form>
            <InputField
              placeholder="Full name"
              className="fa fa-user"
              defaultValue={this.state.formFields.fullName}
            />
            <InputField
              placeholder="Email"
              className="fa fa-envelope"
              defaultValue={this.state.formFields.Email}
            />
             <InputField
              placeholder="Username"
              className='fa fa-user'
              defaultValue={this.state.formFields.Username}
            />
            <InputField
              placeholder="Password"
              className="fa fa-lock"
              type='password'
              defaultValue={this.state.formFields.Password}
            />
            <InputField
              placeholder="Retype Password"
              className="fa fa-lock"
              type='password'
              defaultValue={this.state.formFields.RetypePassword}
            />
            <RegisterButton/>
            <div>
              <a href="../Login" className="text-center">
                I already have a membership
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }

  handleFormFields(event) {
    this.setState({ fullName: event.target.value });
  }
}
