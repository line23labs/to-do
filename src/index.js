import React from "react";
import TodoList from "./components/TodoList";
import ReactDOM from "react-dom";
import axios from "axios";
/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data:[{title:'',description:'',startDate:'',endDate:''}],
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    axios
      .post("http://localhost:3000/api/task", data)
      .then(alert("data inserted successfully"));

  }

  componentDidMount() {
    fetch("http://localhost:3000/api/tasks")
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
        });
      });

  }

  handleInputChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //Delete A Todo
  delTodo(_id){
    fetch('http://localhost:3000/api/task/' + _id, {
      method: 'DELETE',
  }).then(res => res)
  location.reload();
  }
  render() {

    return (
      <div>
        <TodoList
             data={this.state.data}
          handleInputChange={this.handleInputChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)} delTodo={this.delTodo.bind(this)}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
