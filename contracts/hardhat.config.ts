import * as dotenv from 'dotenv' 
dotenv.config()

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: process.env.MUMBAI_INFURA_RPC,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
};

export default config;
