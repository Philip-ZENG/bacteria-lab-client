import _ from 'lodash'
import { MiddlewareNotFoundError } from 'next/dist/shared/lib/utils';
import React,  {Component} from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { MDBBtn } from "mdb-react-ui-kit";

function Tile(props) {
  return <Button icon color={props.tilecolor} size='massive'></Button>;
}

const GameboardRaw = () => (
    <div style={{height: '45px'}}>
        <Tile tilecolor='blue'/>
        <Tile tilecolor='yellow'/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
        <Tile/>
    </div>
)


class Gameboard extends Component {
  render(){
    return (
        <div>
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
            <GameboardRaw />
        </div>
        
    );
  }
};

export default Gameboard;