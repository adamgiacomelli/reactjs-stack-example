import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { createComponent as cc } from 'react-fela';
import { ExampleButton } from '../common';
import crow from '../../assets/crow.jpg';

const ImageWrapper = cc(
  () => ({
    display: 'block',
    height: '200px',
    margin: 'auto',
    width: 'auto',
  }),
  'img',
  ['src', 'alt'],
);

const InstructionLabel = cc(
  () => ({
    color: 'white',
    textAlign: 'center',
  }),
);

const APIData = cc(
  () => ({
    color: 'white',
    fontWeight: 'bold',
  }),
  'pre',
);

@inject('rootStore')
@observer
class SpecificExampleComponent extends Component {
  onClick = () => {
    const {
      rootStore: {
        exampleStore: { fetchGithub },
      },
    } = this.props;
    fetchGithub();
  };

  render() {
    const {
      rootStore: {
        exampleStore: { data, loading },
      },
    } = this.props;

    return (
      <div>
        <ImageWrapper alt="crow" src={crow} />
        <InstructionLabel>
          To get started, edit
          {' '}
          <code>src/App.js</code>
          {' '}
and save to reload.
        </InstructionLabel>
        <ExampleButton onClick={this.onClick} label="Click me to test API" />
        <APIData>
          {!loading && data && data.map((prop, idx) => <p key={idx}>{prop}</p>)}
          {loading && 'loading...'}
        </APIData>
      </div>
    );
  }
}

export default SpecificExampleComponent;
