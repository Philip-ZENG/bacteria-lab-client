// This page is used to invite players to join the game

import React, {Component} from 'react';
import web3 from '../eth/web3';
import invitePlayer from '../eth/invitePlayer';

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
        <h1>Invite Player into the BacteriaLab Game</h1>
        <p>The Admin Address of this game is: {this.state.adminAddress}</p>
        <p>Currently {this.state.playerCount} players have join the game</p>
        <p>The address of the last player who join the game is shwon below:</p>
        <p>{this.state.lastPlayer}</p>
        <form onSubmit={this.onSubmit}>
          <h4>Invite New Player</h4>
          <div>
            <label>Enter Address of New Player</label>
            <input 
              value={this.state.newPlayerAddress}
              onChange={event => this.setState({ newPlayerAddress: event.target.value })}
            />
          </div>
          <button>Invite</button>
        </form>
  
        <h1>{this.state.message}</h1>
      </div>

    );
  };
}

export default InvitePlayer