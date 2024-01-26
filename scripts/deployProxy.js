const hre = require("hardhat");


async function main() {
 const Pizza = await ethers.getContractFactory("Pizza");
 console.log("Deploying Pizza...");
 const pizza = await upgrades.deployProxy(Pizza, [8], {
   initializer: "initialize",
 });
 await pizza.waitForDeployment();


 console.log("Pizza (proxy contract): ", pizza.target);
 console.log(
   "Pizza (logic contract): ",
   await upgrades.erc1967.getImplementationAddress(pizza.target)
 );
 console.log(
   "Pizza (proxy admin contract): ",
   await upgrades.erc1967.getAdminAddress(pizza.target)
 );
}


main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});