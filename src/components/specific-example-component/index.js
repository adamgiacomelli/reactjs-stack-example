import React, { Component } from 'react';
import { ExampleButton } from '../common/'
import crow from '../../assets/crow.jpg';

class SpecificExampleComponent extends Component {
  render() {
    return (
      <div>
        <img alt={`crow`} src={crow}/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ExampleButton onClick={ this.onClick } label={`Click me to test API`}/>
      </div>
    );
  }

  onClick = e => {
    console.warn(e);
  }
}

export default SpecificExampleComponent;
