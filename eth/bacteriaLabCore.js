// This file creates a local web3 instance of our deployed contract using the 
// abi interface and contract deployment address
// So that our frontend can communicate with the deployed contract through the web3 instance

import web3 from './web3';
import BacteriaLabCoreABI from './contract_abi/BacteriaLabCore.json';

// contract deployment address
const address = '0x6c837e9deEEbE5FCbe4f4A8F8751f3967471D262';

// contract abi
const abi = BacteriaLabCoreABI;

const BacteriaLabCore = new web3.eth.Contract(abi, address);

export default BacteriaLabCore;
