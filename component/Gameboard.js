import _ from 'lodash'
import React,  {Component} from 'react';
import Tile from './Tile';
import { Grid } from "semantic-ui-react";

const mapWidth = 3;

function generateRow(startID) {
  const columns = _.times(mapWidth, (i) => (
    <Grid.Column key={i+startID} width={1}>
      <Tile colonyID={i+startID}/>
    </Grid.Column>
  ))
  return columns;
};
  
const map = _.times(mapWidth, (j) => (
  <Grid.Row key={j}>
    {generateRow(mapWidth*j)}
  </Grid.Row>
))


class Gameboard extends Component {
  render(){
    return (
      <div>
        <Grid centered relaxed> 
          {map}
        </Grid>
      </div>
    );
  }
};

export default Gameboard;