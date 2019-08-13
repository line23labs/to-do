import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>Welcome to React</div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
