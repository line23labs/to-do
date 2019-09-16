import React, { Component } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import { InputField } from "../InputField";
import { Checkbox } from "../Checkbox";
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
        Password: "",
        RetypePassword: ""
      }
    };
    this.handleFormFields = this.handleFormFields.bind(this);
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
      <Card>
        <Card.Body className="register-card-body">
          <p className="login-box-msg">Registration form for new members</p>
          <Form onSubmit={this.formHandler} method="post">
            <InputField
              placeholder="Full name"
              className="fa fa-user"
              defaultValue={this.state.formFields.fullName}
              onChange={this.handleFormFields.fullName}
            />
            <InputField
              placeholder="Email"
              className="fa fa-envelope"
              defaultValue={this.state.formFields.Email}
              onChange={this.handleFormFields.Email}
            />
            <InputField
              placeholder="Password"
              className="fa fa-lock"
              type='password'
              defaultValue={this.state.formFields.Password}
              onChange={this.handleFormFields.Password}
            />
            <InputField
              placeholder="Retype Password"
              className="fa fa-lock"
              type='password'
              defaultValue={this.state.formFields.RetypePassword}
              onChange={this.handleFormFields.RetypePassword}
            />
            <Checkbox text="I agree to the" terms="terms" />
            <div className="social-auth-links text-center">
              <p>- Or Register with-</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i>
                Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Google
              </a>
            </div>
            <div>
              <a href="../Login" className="text-center">
                I already have a membership
              </a>
            </div>
            {/* <InputGroup className='mb-3'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Full name'
                                defaultValue={this.state.fullName}
                                onChange={this.onChange.bind(this)}
                            />
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    <span className='fa fa-user'></span>
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup> */}
          </Form>
        </Card.Body>
      </Card>
    );
  }

  handleFormFields(event) {
    this.setState({ formFields: event.target.value });
    console.log(formFields);
  }
}
