import React from 'react';
import ReactDOM from 'react-dom';
import {Login} from './components/SignUp';
import 'admin-lte/dist/css/AdminLTE.css';

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
        <Login></Login>
      </div>);
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
