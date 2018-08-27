import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import crow from '../../assets/crow.jpg';

const styles = {
  card: {
    maxWidth: 500,
    margin: 10,
  },
  media: {
    height: 240,
  },
  code: {
    maxWidth: 452,
    overflow: 'auto',
    maxHeight: 250,
  },
};
@withStyles(styles)
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
      classes,
    } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={crow} title="Crow" />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Crow
            </Typography>
            <Typography component="p">
              To get started, edit
              {' '}
              <code>src/App.js</code>
              {' '}
and save to reload.
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="primary" onClick={this.onClick}>
              Click me to test API
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <pre className={classes.code}>
              {!loading
                && data
                && data.map((prop, idx) => <p key={idx}>{prop}</p>)}
              {loading && 'loading...'}
            </pre>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

export default SpecificExampleComponent;
