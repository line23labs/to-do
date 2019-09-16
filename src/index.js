import React from 'react';
import ReactDOM from 'react-dom';
import {Facebook} from './components/Facebook';

/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */
  render() {
    return <div>
      <Facebook></Facebook>
    </div>;
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));


