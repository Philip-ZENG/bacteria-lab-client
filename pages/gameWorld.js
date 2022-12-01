// This page is used to the game world

import React, {Component} from 'react';
import Router from 'next/router';
import web3 from '../eth/web3';
import bacteriaLabCore from '../eth/bacteriaLabCore';
import 'semantic-ui-css/semantic.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import PlayerInfo from '../component/PlayerInfo';
import Gameboard from '../component/Gameboard';
import TileInfo from '../component/TileInfo';
import Actionboard from '../component/Actionboard';
import NavbarTop from '../component/NavbarTop';
import NavbarBottom from '../component/NavbarBottom';

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon
} from 'semantic-ui-react'

class GameWorld extends Component {

  render() {
    return (
    <div>
      <NavbarTop />
      
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={7}>
              <div style={{height: '25px'}}>
              </div>
              <Container textAlign='center'>
                <Gameboard />
              </Container>
            </Grid.Column>

            <Grid.Column width={9}>
            <Divider horizontal>
      <Header as='h3'>
        <Icon name='user secret' />
        Player Info
      </Header>
    </Divider>
                <PlayerInfo />
              <Divider horizontal>
      <Header as='h3'>
        <Icon name='tag' />
        Tile Info
      </Header>
    </Divider>
                <TileInfo />
              <Divider horizontal>
      <Header as='h3'>
        <Icon name='american sign language interpreting' />
        Acrion Board
      </Header>
    </Divider>
                <Actionboard />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <NavbarBottom />       
    </div>


    );
  };
}

export default GameWorld


