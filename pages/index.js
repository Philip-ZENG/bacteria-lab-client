// This page is used to invite players to join the game

import React, {Component} from 'react';
import web3 from '../eth/web3';
import invitePlayer from '../eth/invitePlayer';
import 'semantic-ui-css/semantic.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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
  Button,
  Icon
} from 'semantic-ui-react'

class InvitePlayer extends Component {
  state = {
    adminAddress: '',
    playerCount: '',
    playerList: [''],
    lastPlayer: '',
    newPlayerAddress: '',
    message: ''
  };

  // life cycle function run when rendering, good place for loading initial data
  async componentDidMount() {
    const admin = await invitePlayer.methods.adminAddress().call();
    this.setState({adminAddress: admin})

    const playerCount = await invitePlayer.methods.playerCount().call();
    this.setState({playerCount: playerCount})

    const lastPlayer = await invitePlayer.methods.playerList(playerCount-1).call();
    this.setState({lastPlayer: lastPlayer});
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...(Around 15~30 seconds)' });

    await invitePlayer.methods.invitePlayer(this.state.newPlayerAddress).send({
      from: accounts[0]
    })

    this.setState({ message: 'You have been invited!' });
  };


  render() {
    console.log(web3.version);
    web3.eth.getAccounts().then(console.log);

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


        <Grid columns={4} divided>
          <style>
            {`
            html, body {background-color: #252839 !important;}
            
            `}
            
          </style>
          
          <Grid.Row>
            <Grid.Column width={1}>
              
            </Grid.Column>

            <Grid.Column width={7}>
              <Container textAlign='center'>
              <div>
              <h1 style={{color:'#ffffff'}}>Invite Player into the BacteriaLab Game</h1>
              <p style={{color:'#ffffff'}}>The Admin Address of this game is: {this.state.adminAddress}</p>
              <p style={{color:'#ffffff'}}>Currently {this.state.playerCount} players have join the game</p>
              <p style={{color:'#ffffff'}}>The address of the last player who join the game is shwon below:</p>
              <p style={{color:'#ffffff'}}>{this.state.lastPlayer}</p>
              </div>
              
              <form onSubmit={this.onSubmit}>
                <h4 style={{color:'#ffffff'}}>Invite New Player</h4>
                <div>
                  <label style={{color:'#ffffff'}}>Enter Address of New Player</label>
                  <input 
                    value={this.state.newPlayerAddress}
                    onChange={event => this.setState({ newPlayerAddress: event.target.value })}
                  />
                </div>
                <Button animated='vertical'>
                  <Button.Content visible>Invite</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </form>
              <h1>{this.state.message}</h1>
              </Container>
            </Grid.Column>

            <Grid.Column width={7}>
              <Container textAlign='center'>
              <div style={{height: '72px'}}>
              </div>
                <Image size='big' src='/icon.png' verticalAlign='middle'/>
              <div style={{height: '73px'}}>
              </div>
              </Container>
            </Grid.Column>

            <Grid.Column width={1}>
              
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

export default InvitePlayer