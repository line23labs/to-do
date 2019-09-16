import React from "react";
import axios from "axios";
import { Card, Form, InputGroup } from "react-bootstrap";
import { InputField } from "../InputField";
import { Checkbox } from "../Checkbox";
import { SignUpForm } from "../SignUpForm";

/**
 *
 *
 * @export
 * @class Login
 * @extends {React.Component}
 */
export class Login extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body className="register-card-body">
          <p className="login-box-msg">Registration form for new members</p>
          <Form>
            <InputField placeholder="Email" className="fas fa-envelope" />
            <InputField placeholder="Password" className="fas fa-lock" />
            <Checkbox text="Remember Me" />
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
              <a href="../SignUpForm" className="text-center">
                Register a new membership
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
