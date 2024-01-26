// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

// Open Zeppelin libraries for controlling upgradability and access.
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";


contract PizzaUUPS is Initializable, UUPSUpgradeable, OwnableUpgradeable {
   uint256 internal slices;


   event SlicesLeft(uint256 left);


   function initialize(uint256 _slices) public initializer {
       slices = _slices;
       __Ownable_init(msg.sender);

   }


   // Safeguard from unauthorized upgrades
   function _authorizeUpgrade(address) internal override onlyOwner {}


   function eatSlice() external {
       require(slices > 0, "No slices left.");
       slices -= 1;
       emit SlicesLeft(slices);
   }


   function slicesLeft() external view returns (uint256) {
       return slices;
   }
}
