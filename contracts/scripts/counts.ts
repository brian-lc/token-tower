import { ethers } from 'hardhat';
import * as dotenv from 'dotenv' 
dotenv.config()

async function main() {

  // Testing locally with generated values from hardhat node
  const contractAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const testUserAddr = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'; // Account #2

  const myCT = await ethers.getContractAt("MyCommunityToken", contractAddr);

  console.log("Token balance for test user is:", (await myCT.balanceOf(testUserAddr)).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
