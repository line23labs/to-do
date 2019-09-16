import React from "react";
import axios from "axios";
import { Card, Form, InputGroup } from "react-bootstrap";
import { InputField } from "../InputField";
import {RegisterButton} from "../RegisterButton";

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
            <InputField placeholder="Email" className="fa fa-envelope" />
            <InputField placeholder="Password" className="fa fa-lock" />
            <RegisterButton/>
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
