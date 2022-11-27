// This page is used to the game world

import React, {Component} from 'react';
import web3 from '../eth/web3';

class GameWorld extends Component {
  render() {
    console.log(web3.version);
    web3.eth.getAccounts().then(console.log);

    return (
      <div>Welcome to Bacteria Lab Game World!</div>
    );
  };
}

export default GameWorld