import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyCommunityToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployOneMyCommunityTokenFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, minterAccount, userAccount] = await ethers.getSigners();

    const MyCT = await ethers.getContractFactory("MyCommunityToken");
    const myCT = await MyCT.deploy(minterAccount.address);

    return { myCT, owner, minterAccount, userAccount };
  }

  describe("Deployment", function () {
    it("should set the minter address", async function () {
      const { myCT, owner, minterAccount } = await loadFixture(deployOneMyCommunityTokenFixture);

      expect(await myCT.minter()).to.equal(minterAccount.address);
    });
  });

  describe("Minting", function () {
    it("Should mint a token for a user when called by the minter account", async function () {
      const { myCT, owner, minterAccount, userAccount } = await loadFixture(deployOneMyCommunityTokenFixture);

      await expect(
        myCT.connect(minterAccount).mintTokenForUser(userAccount.address)
      ).not.to.be.reverted;
    });

    it("Should NOT mint a token for a user when called by someone else", async function () {
      const { myCT, owner, minterAccount, userAccount } = await loadFixture(deployOneMyCommunityTokenFixture);

      await expect(
        myCT.connect(owner).mintTokenForUser(userAccount.address)
      ).to.be.revertedWith(
        "Address is not allowed to mint"
      );
    });
  });

  describe("Events", function () {
    it("Should emit an event on mint", async function () {
      const { myCT, owner, minterAccount, userAccount } = await loadFixture(deployOneMyCommunityTokenFixture);

      await expect(
        myCT.connect(minterAccount).mintTokenForUser(userAccount.address)
      ).to.emit(myCT, "Minted")
      .withArgs(userAccount.address, 1);

    });
  });

});