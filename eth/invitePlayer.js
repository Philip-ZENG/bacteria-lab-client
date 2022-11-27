// This file creates a local web3 instance of our deployed contract using the 
// abi interface and contract deployment address
// So that our frontend can communicate with the deployed contract through the web3 instance

import web3 from './web3';
import compiledInvitePlayer from '../../eth/build/InvitePlayer.json';

// contract deployment address
const address = '0xC27b2B57685e648067026918A7BE6f9B4912A17e';

// contract abi
const abi = compiledInvitePlayer.abi;

const instance = new web3.eth.Contract(abi, address);

export default instance;
