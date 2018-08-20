import React, { Component } from 'react';
import SpecificExampleComponent from './components/specific-example-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Stack Example</h1>
        </header>
        <SpecificExampleComponent/>
      </div>
    );
  }
}

export default App;
