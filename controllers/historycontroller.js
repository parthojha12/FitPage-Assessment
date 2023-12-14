// NOT WORKING BECAUSE IT TAKES SUBSCRIPTION FOR HISTTORY DATA, AND SHOWS INVALID "API KEY"

const axios = require('axios');
require('dotenv').config(); 

const API_KEY = process.env.API_KEY; 
const API_ENDPOINT = 'https://history.openweathermap.org/data/2.5/history/city';


const getWeatherHistory = async (locationId) => {
  const params = {
    q: locationId, // Specify city name and country code as 'city_name,country_code'
    type: 'hour',
    start: Math.floor(Date.now() / 1000) - 7 * 24 * 60 * 60, // This shows data for 7 days
    end: Math.floor(Date.now() / 1000),
    appid: API_KEY,
  };

  try {
    const response = await axios.get(API_ENDPOINT, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching historical data from OpenWeather API", error.message);
    throw new Error("Error fetching historical weather data");
  }
};

module.exports = {
  getWeatherHistory,
};
 