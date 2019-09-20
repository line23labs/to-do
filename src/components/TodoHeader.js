import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class TodoHeader extends Component {

  render() {
    return (
      
      <div className="box-header ui-sortable-handle" style={{ cursor: 'move' }}>
        <i className="fa fa-calendar-minus-o"></i>
        <h3 className="box-title">To Do List</h3>
        <div className="box-tools pull-right">
          <ul className="pagination pagination-sm inline">
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>
      </div>

    );
  }
}
