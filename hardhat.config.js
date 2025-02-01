require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Get from Alchemy or Infura
      accounts: [process.env.PRIVATE_KEY], // Your wallet private key
    },
  },
};
