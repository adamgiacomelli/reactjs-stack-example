import React, { Component } from 'react';
import { createComponent as cc } from 'react-fela';
import SpecificExampleComponent from './components/specific-example-component';


const AppHeader = cc(
  () => ({
    width: '100%',
    margin: 'auto',
    display: 'block',
  }),
  'header',
);

const AppTitle = cc(
  () => ({
    color: 'orange',
    textAlign: 'center',
  }),
  'h1',
);

const AppWrapper = cc(
  () => ({
    backgroundColor: 'black',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
);

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppTitle>Welcome to React Stack Example</AppTitle>
        </AppHeader>
        <SpecificExampleComponent />
      </AppWrapper>
    );
  }
}

export default App;
