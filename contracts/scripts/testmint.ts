import { ethers } from 'hardhat';
import * as dotenv from 'dotenv' 
dotenv.config()

async function main() {

  // Testing locally with generated values from hardhat node
  const contractAddr = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
  const testDeployerAddr = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'; // Account #0
  const testMinterAddr = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'; // Account #1
  const testUserAddr = '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'; // Account #2

  const myCT = await ethers.getContractAt("MyCommunityToken", contractAddr);

  const minterAccount = await ethers.getSigner(testMinterAddr);

  await myCT.connect(minterAccount).mintTokenForUser(testUserAddr);

  console.log("Token balance for test user is now:", (await myCT.balanceOf(testUserAddr)).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
