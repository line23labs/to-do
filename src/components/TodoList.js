import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class TodoList extends Component {
    render() {
        return (
            <div className="box-body">

                <ul className="todo-list">
                    <li>
                        <span className="handle">
                            <i className="fa fa-ellipsis-v"></i>
                            <i className="fa fa-ellipsis-v"></i>
                        </span>

                        <input type="checkbox" value="" />

                        <span className="text">Design a nice theme</span>

                        <small className="label label-danger"><i className="fa fa-clock-o"></i> 2 mins</small>

                        <div className="tools">
                            <i className="fa fa-edit"></i>
                            <i className="fa fa-trash-o"></i>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
