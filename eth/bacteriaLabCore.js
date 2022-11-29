// This file creates a local web3 instance of our deployed contract using the 
// abi interface and contract deployment address
// So that our frontend can communicate with the deployed contract through the web3 instance

import web3 from './web3';
import BacteriaLabCoreABI from './contract_abi/BacteriaLabCore.json';

// contract deployment address
const address = '0xcB94C67d0aE7416fc24204C2Db617FEa36705fFe';

// contract abi
const abi = BacteriaLabCoreABI;

const instance = new web3.eth.Contract(abi, address);

export default instance;
