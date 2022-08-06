import { ethers } from "hardhat";
import * as dotenv from 'dotenv' 
dotenv.config()

async function main() {

  const MyCT = await ethers.getContractFactory("MyCommunityToken");
  const myCT = await MyCT.deploy(process.env.MINTER_ADDRESS!);
  
  await myCT.deployed();

  console.log("Deployed community token ERC20 contract to:", myCT.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
