import React from "react";
import TodoList from "./components/TodoList";
import ReactDOM from "react-dom";
import "admin-lte/dist/css/AdminLTE.css";
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
            <div>
                <TodoList />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
