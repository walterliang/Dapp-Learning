import { task } from "hardhat/config";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from "hardhat/config";


const fs = require("fs");
require('dotenv').config()


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args,hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function mnemonic() {

 return process.env.PRIVATE_KEY;

}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default  {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      //gasPrice: 125000000000,//you can adjust gasPrice locally to see how much it will cost on production
      /*
        notice no mnemonic here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
      mnemonic()
      ],
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + process.env.INFURA_ID, //<---- YOUR INFURA ID! (or it won't work)
      accounts: [
        mnemonic()
      ],
    },
    matic: {
      url: "https://polygon-mainnet.infura.io/v3/0aae8358bfe04803b8e75bb4755eaf07",
      accounts: [
        mnemonic()
      ]
    }
  }
};