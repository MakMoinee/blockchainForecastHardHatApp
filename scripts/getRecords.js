const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0xAC3d931d6d2c201FcF82eced7Be4A42Ce1772692"; // Replace with your contract address
  const EnergyForecast = await ethers.getContractFactory("EnergyForecast");
  const contract = await EnergyForecast.attach(contractAddress);
  const forecasts = await contract.getForecasts();
  console.log(forecasts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
