import React from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoButton from "./components/TodoButton";
import ReactDOM from "react-dom";
import "admin-lte/dist/css/AdminLTE.min.css";
import './components/styles/style.css'
/**
 * Main Application Component
 */
class App extends React.Component {
    /**
     * Renders the component DOM
     * @return {void}
     */
    render() {
        return (
            <div className="box box-primary">
                <TodoHeader/><TodoList/><TodoButton/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
