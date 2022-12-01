// Header at the top of the gameWorld page, where players can see the infor mation of their current status

import React,  {Component} from 'react';
import { Container, Table, Image, Grid, Segment,Statistic } from 'semantic-ui-react';

class PlayerInfo extends Component {

  render(){
    return (
      <Container>
      <Grid columns={4} divided verticalAlign='middle'>
        <Grid.Row stretched>
          <Grid.Column width={3}>
          <Segment>
            <Container fluid>
            <Image fluid src='/icon.png' />
            </Container>
          </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
          <Segment>
            Player ID: 22222
          </Segment>
          <Segment>      
            Player Address: 12222222
          </Segment>
          </Grid.Column>
          <Grid.Column width={3}>
            <Statistic>
              <Statistic.Value>333</Statistic.Value>
              <Statistic.Label>Nutrition</Statistic.Label>
            </Statistic>
          </Grid.Column>
          <Grid.Column width={3}>
            <Statistic>
              <Statistic.Value>666</Statistic.Value>
              <Statistic.Label>Absorption Rate</Statistic.Label>
            </Statistic>
          </Grid.Column>

        </Grid.Row>
      </Grid>
      </Container>
    );
  }
};

export default PlayerInfo;
