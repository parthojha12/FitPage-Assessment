const axios = require("axios");
require("dotenv").config();

const getWeatherData = async (locationId) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationId}&appid=${process.env.API_KEY}&units=metric`);
        return {
            Temperature: response.data.main.temp,
            Humidity: response.data.main.humidity,
            Feels_Like: response.data.main.feels_like,
            Maximum_Temperature: response.data.main.temp_max,
            Minimum_Temperature: response.data.main.temp_min
        };
    } catch (error) {
        throw new Error("Error fetching data");
    }
};

module.exports = {
    getWeatherData
};
