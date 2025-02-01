const hre = require("hardhat");

async function main() {
    const EnergyForecast = await hre.ethers.getContractFactory("EnergyForecast");
    const energyForecast = await EnergyForecast.deploy();
    const address = await energyForecast.getAddress();

    console.log(`EnergyForecast deployed to: ${address}`);
}

main().catch((error) => {
    console.error(error);
    // process.exitCode = 1;
});
