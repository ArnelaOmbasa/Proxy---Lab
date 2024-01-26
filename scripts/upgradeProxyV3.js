// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
 const PizzaV3 = await ethers.getContractFactory("PizzaV3");
 console.log("Upgrading Pizza...");
 const PROXY_ADDRESS = "0x6baA3c7C2948238e57A3F054541fabd5e6EB5FD3";
 const pizzaV3LogicAddress = await upgrades.prepareUpgrade(
   PROXY_ADDRESS,
   PizzaV3
 );


 console.log("Pizza (logic contract):", pizzaV3LogicAddress);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});
