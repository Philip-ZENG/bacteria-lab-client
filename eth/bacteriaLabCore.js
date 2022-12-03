// This file creates a local web3 instance of our deployed contract using the 
// abi interface and contract deployment address
// So that our frontend can communicate with the deployed contract through the web3 instance

import web3 from './web3';
import BacteriaLabCoreABI from './contract_abi/BacteriaLabCore.json';

// contract deployment address
const address = '0x1a8044b57ea3e4C83f42D2909343577C9C0c42CD';

// contract abi
const abi = BacteriaLabCoreABI;

const BacteriaLabCore = new web3.eth.Contract(abi, address);

export default BacteriaLabCore;
