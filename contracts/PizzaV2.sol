// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;


import "./Pizza.sol";


contract PizzaV2 is Pizza {
   function refillSlice() external {
       slices += 1;
   }


   function pizzaVersion() external pure virtual returns (uint) {
       return 2;
   }
}
