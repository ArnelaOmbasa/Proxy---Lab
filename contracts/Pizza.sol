// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;


contract Pizza {
   uint internal slices;
   event SlicesLeft(uint numLeft);


   function initialize(uint _slices) external {
       slices = _slices;
   }


   function eatSlice() external {
       require(slices >= 1, "No slices left.");
       slices -= 1;
       emit SlicesLeft(slices);
   }


   function slicesLeft() external view returns (uint) {
       return slices;
   }
}


