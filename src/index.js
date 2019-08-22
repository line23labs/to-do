import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Main Application Component
 */
class App extends React.Component {
  /**
   * Renders the component DOM
   * @return {void}
   */
  render() {
    return <div>Welcome to React</div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
