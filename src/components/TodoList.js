import React, { Component } from "react";
import "./styles/style.css";
export default class TodoList extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <div
            className="card-header ui-sortable-handle"
            style={{
              cursor: "move"
            }}
          >
            <h3 className="card-title">
              <i className="ion ion-clipboard mr-1"> </i> ToDo List
            </h3>
            <div className="card-tools ">
              <div className="pagination">
                <a href="#"> Previous </a> <a href="#"> 1 </a>
                <a href="#"> 2 </a> <a href="#"> 3 </a> <a href="#"> Next </a>
              </div>
            </div>
          </div>

          <div className="box-body">
          {this.props.data.map((todo)=>
            <ul className="todo-list ">

              <li>
                 <input type="checkbox" />
             <b><span className="text text-primary">{todo.title}</span></b>
                <small className="label label-success">
                  <i className="fa fa-clock-o"> </i>Starts On {todo.startDate}
                </small>
                <small className="label label-danger">
                  <i className="fa fa-clock-o"> </i>Ends On {todo.endDate}
                </small>
                <div className="tools">
                  <i onClick={updateTodo} className="fa fa-edit fa-lg update"> </i>

                  <i onClick={this.props.delTodo.bind(this,todo._id)} className="fa fa-trash-o fa-lg"> </i>
                </div>
              </li>

            </ul>
             )}
          </div>
          <div className="box-footer clearfix no-border">
            <button type="button" onClick={addtodo} className="btn btn-primary pull-right addtodo">
              <i className="fa fa-plus" > </i> Add Todo
            </button>
          </div>
        </div>
        <div className="popup" >
          <div className="popup-content">
            <img
              src="https://img.icons8.com/color/48/000000/close-window.png"
              className="close"
              onClick={popup}
            />
            <div className="card">
              <div className="card-header">
                <h1> Todo </h1>
              </div>
              <form onSubmit={this.props.handleSubmit.bind(this) } id="myForm" >
                <div className="form-group col-md-6">
                  <label> Todo Title </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Your Todo Title " required onChange={this.props.handleInputChange.bind(this)}
                  />
                </div>
                  <div className="form-group col-md-6">
                  <label> Todo Description </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    className="form-control"
                    name="description" required onChange={this.props.handleInputChange.bind(this)}
                    placeholder="Your Todo Description"
                  />
                </div>
                <div className="container">
                  <div className="col-md-5">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker6">
                        <input
                          type="text"
                          placeholder="Todo StartDate with Time"
                          className="form-control" name="startDate" required onBlur={this.props.handleInputChange.bind(this)}
                        />
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar" >

                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker7">
                        <input
                          type="text"
                          placeholder="Todo EndDate with Time"
                          className="form-control" name="endDate"  required onBlur={this.props.handleInputChange.bind(this)}
                        />
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar">

                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
          <input type="submit" onClick={todo}value="Create"className="btn btn-primary todoButton"/>
                </form>
            </div>
          </div>
        </div>
        <div className="popupdate" >
          <div className="popup-content">
            <img
              src="https://img.icons8.com/color/48/000000/close-window.png"
              className="closeupdate"
              onClick={popupdate}
            />
            <div className="card">
              <div className="card-header">
                <h1> Todo </h1>
              </div>
              <form onSubmit={this.props.handleSubmit.bind(this) } id="myForm" >
                <div className="form-group col-md-6">
                  <label> Todo Title </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Your Todo Title " required onChange={this.props.handleInputChange.bind(this)}
                  />
                </div>
                  <div className="form-group col-md-6">
                  <label> Todo Description </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="50"
                    className="form-control"
                    name="description" required onChange={this.props.handleInputChange.bind(this)}
                    placeholder="Your Todo Description"
                  />
                </div>
                <div className="container">
                  <div className="col-md-5">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker6">
                        <input
                          type="text"
                          placeholder="Todo StartDate with Time"
                          className="form-control" name="startDate" required onBlur={this.props.handleInputChange.bind(this)}
                        />
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar" >

                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <div className="input-group date" id="datetimepicker7">
                        <input
                          type="text"
                          placeholder="Todo EndDate with Time"
                          className="form-control" name="endDate"  required onBlur={this.props.handleInputChange.bind(this)}
                        />
                        <span className="input-group-addon">
                          <span className="glyphicon glyphicon-calendar">

                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
          <input type="submit" onClick={todo} value="Update"className="btn btn-success updateButton"/>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
