import React from "react";
import { Card, Form, InputGroup } from "react-bootstrap";

export const InputField = props => (
  <InputGroup className="mb-3">
    <input
      placeholder={props.placeholder}
      required
      className={props.className}
      className="form-control"
      defaultValue={props.defaultValue}
      type={props.type}
    />
    <InputGroup.Append>
      <InputGroup.Text>
        <span className={props.className}></span>
      </InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);

InputField.defaultProps = {
  placeholder: "",
  className: "",
  defaultValue: "",
  type:''
};
