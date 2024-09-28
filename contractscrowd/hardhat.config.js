require("@matterlabs/hardhat-zksync-solc");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config(); // Ensure .env is loaded

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: 'lineaSepolia', // Moved defaultNetwork to the top level
  networks: {
    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
    lineaSepolia: {
      url: "https://sepolia.linea.build", // Linea Sepolia RPC URL
      chainId: 59140, // Linea Sepolia chain ID
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Using private key from .env
    },
    // other network configurations can go here
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
