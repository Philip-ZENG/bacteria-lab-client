// This page is used to the game world

import React, {Component} from 'react';
import web3 from '../eth/web3';
import bacteriaLabCore from '../eth/bacteriaLabCore';
import 'semantic-ui-css/semantic.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import PlayerInfo from '../component/PlayerInfo';
import Gameboard from '../component/Gameboard';
import TileInfo from '../component/TileInfo';

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
import Actionboard from '../component/Actionboard';

class GameWorld extends Component {

  render() {
    return (
    <div>
      <Menu inverted>
          <Menu.Item as='a' header>
            <Image size='mini' src='/icon.png' style={{ marginRight: '0em' }} />
              Bacteria Lab
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Menu>


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

      <Segment inverted vertical style={{ margin: '2em 0em 0em', padding: '1.5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Xuanyang Xu' />
              <List link inverted>
                <List.Item as='a'>119010361</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Zhuoru Zeng' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Yan Zhuang' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='FTE4312 Project: Bacteria Lab' />
              <List link inverted>
                <List.Item as='a'>Link to Github</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>        
    </div>


    );
  };
}

export default GameWorld


