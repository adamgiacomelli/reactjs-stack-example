import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as MobxProvider } from 'mobx-react';

import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'react-fela';
import { RootStore } from './stores';

import App from './App';

// Initialize the root store
const rootStore = RootStore.create({});
// Initialize the fela renderer
const renderer = createRenderer();

ReactDOM.render(
  <MobxProvider rootStore={rootStore}>
    <FelaProvider renderer={renderer}>
      <App />
    </FelaProvider>
  </MobxProvider>,
  document.getElementById('root'),
);
