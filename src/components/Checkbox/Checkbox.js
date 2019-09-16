import React from "react";

export const Checkbox = props => (
  <div className="row">
    <div className="col-8">
      <div className="icheck-primary">
        <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
        <label name="agreeTerms">
          {props.text}
          <a href="#">{props.terms}</a>
        </label>
      </div>
    </div>
    <div className="col-4">
      <button type="submit" className="btn btn-primary btn-block btn-flat" value='submit'>
        Register
      </button>
    </div>
  </div>
);

Checkbox.defaultProps = {
  text: "",
  terms: ""
};
