// This file creates a local web3 instance of our deployed contract using the 
// abi interface and contract deployment address
// So that our frontend can communicate with the deployed contract through the web3 instance

import web3 from './web3';
import BacteriaLabCoreABI from './contract_abi/BacteriaLabCore.json';

// contract deployment address
const address = '0x2470c96C175929ACcD710CC13a39Cc6fF1b6E9a5';

// contract abi
const abi = BacteriaLabCoreABI;

const BacteriaLabCore = new web3.eth.Contract(abi, address);

export default BacteriaLabCore;
