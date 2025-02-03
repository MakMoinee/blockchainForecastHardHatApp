// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract EnergyForecast {
    struct Forecast {
        string date; // YYYY-MM-DD format
        string energyConsumption; // Stored as string for readability
    }

    mapping(address => Forecast[]) private userForecasts;
    address public owner;

    event ForecastRecorded(address indexed user, string date, string energyConsumption); // Amount is now a string

    constructor() {
        owner = msg.sender;
    }

    function recordForecast(string memory _date, string memory _energyConsumption) public {
        Forecast memory newForecast = Forecast(_date, _energyConsumption);
        userForecasts[msg.sender].push(newForecast);

        emit ForecastRecorded(msg.sender, _date, _energyConsumption);
    }

    function getForecasts() public view returns (Forecast[] memory) {
        return userForecasts[msg.sender];
    }
}
