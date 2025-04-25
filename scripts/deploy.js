const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying DIDRegistry contract with deployer:", deployer.address);

  const DIDRegistry = await hre.ethers.getContractFactory("DIDRegistry");
  const registry = await DIDRegistry.deploy();

  await registry.deployed();

  console.log("✅ DIDRegistry contract deployed at:", registry.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
