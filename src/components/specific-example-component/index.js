import React, { Component } from 'react';
import { inject, observer} from 'mobx-react';
import { ExampleButton } from '../common/';
import crow from '../../assets/crow.jpg';

@inject('rootStore')
@observer
class SpecificExampleComponent extends Component {
  render() {
    const {rootStore: { exampleStore: {data, loading}}}= this.props;

    return (
      <div>
        <img alt={`crow`} src={crow}/>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ExampleButton onClick={ this.onClick } label={`Click me to test API`}/>
        <pre>
          {!loading && data &&
            data.map((prop, idx) => <p key={idx}>{prop}</p>)
          }
          {loading && `loading...`}
        </pre>
      </div>
    );
  }

  onClick = e => {
    const { rootStore: { exampleStore: {fetchGithub}}} = this.props;
    fetchGithub();
  }
}

export default SpecificExampleComponent;
