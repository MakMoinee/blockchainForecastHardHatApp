// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract EnergyForecast {
    struct Forecast {
        string date; // YYYY-MM-DD format
        uint256 energyConsumption; // in kWh
    }

    mapping(address => Forecast[]) private userForecasts;
    address public owner;

    event ForecastRecorded(address indexed user, string date, uint256 energyConsumption);

    constructor() {
        owner = msg.sender;
    }

    function recordForecast(string memory _date, uint256 _energyConsumption) public {
        Forecast memory newForecast = Forecast(_date, _energyConsumption);
        userForecasts[msg.sender].push(newForecast);
        emit ForecastRecorded(msg.sender, _date, _energyConsumption);
    }

    function getForecasts() public view returns (Forecast[] memory) {
        return userForecasts[msg.sender];
    }
}
