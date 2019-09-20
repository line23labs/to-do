import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class TodoButton extends Component {
    render() {
        return (
            <div className="box-footer clearfix no-border">
            <button type="button" className="btn btn-default pull-right"><i className="fa fa-plus"></i> Add item</button>
          </div>
        );
    }
}