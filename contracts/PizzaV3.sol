// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import "./PizzaV2.sol";


contract PizzaV3 is PizzaV2 {
   string internal pizzaType;


   function setType(string memory _pizzaType) external {
       pizzaType = _pizzaType;
   }


   function pizzaVersion() external pure override returns (uint256) {
       return 3;
   }
}
