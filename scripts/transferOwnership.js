// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");


async function main() {
 // Your Gnosis Safe address
 // (without the gor: part)
 const gnosisSafe = "0xCbe3054BAe650C7125DD37BD610CEEBB2d346193";
 const proxyAddress = "0x6baA3c7C2948238e57A3F054541fabd5e6EB5FD3";


 console.log("Transferring ownership of ProxyAdmin...");
 // The owner of the ProxyAdmin can upgrade our contracts
 await upgrades.admin.transferProxyAdminOwnership(proxyAddress, gnosisSafe);
 console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
 console.error(error);
 process.exitCode = 1;
});
