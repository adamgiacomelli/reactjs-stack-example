import React, { Component } from 'react';
import crow from '../../assets/crow.jpg';

class SpecificExampleComponent extends Component {
  render() {
    return (
      <div>
        <img alt={`crow`} src={crow}/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default SpecificExampleComponent;
