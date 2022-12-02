import _ from 'lodash'
import React,  {Component} from 'react';
import NFTTile from './NFTTile';
import { Grid } from "semantic-ui-react";

const mapWidth = 16;

function generateRow(startID) {
  const columns = _.times(mapWidth, (i) => (   
    <NFTTile colonyID={i+startID}/>
  ))
  return columns;
};
  
const map = _.times(mapWidth, (j) => (
  <div style={{height: '45px'}}>
    {generateRow(mapWidth*j)}
  </div> 
))


class NFTboard extends Component {
  render(){
    return (
      <div>
          {map}
      </div>
    );
  }
};

export default NFTboard;