// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title My Community Contract 
/// @author Brian Chamberlain (etherBC.eth)
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details
contract MyCommunityToken is ERC20 {

    // The address provided when deploying the contract
    // that can mint tokens for another user. This should be the
    // same wallet address that's being used by the validator web service.
    // Should probably not be the same address as the deployer, but could be.
    address public minter;

    // Emit a minted event to track/respond to token claims externally
    event Minted(address to, uint amount);

    // Provide the address of the wallet that can perform minting operations
    // on behalf of the user. This address should be the same wallet used in the 
    // web service that is doing ZK support.
    constructor(address allowedToMint) ERC20("My Community Token", "MCT") {
        minter = allowedToMint;
    }

    // We only want integer tokens, not decimals. 
    // You can't send 1.6 community tokens (for example)
   function decimals() public view virtual override returns (uint8) {
    return 0;
   }

   // To be called by the ZK support webservice that is 
   // generating the ZK proof. 
   // TODO: add in zk valiator contract calls here
   function mintTokenForUser(address userAddress) public {
    require(msg.sender == minter, "Address is not allowed to mint");
    _mint(userAddress, 1);
    emit Minted(userAddress, 1);
   }

}