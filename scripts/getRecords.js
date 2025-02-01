const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // Replace with your contract address
  const EnergyForecast = await ethers.getContractFactory("EnergyForecast");
  const contract = await EnergyForecast.attach(contractAddress);
  const forecasts = await contract.getForecasts();
  console.log(forecasts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
