const axios = require("axios");
require("dotenv").config();
const locations = ["mumbai", "delhi", "vapi"];

const isValidCity = async (locationId) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationId}&appid=${process.env.API_KEY}&units=metric`);
        return response.status === 200;
    } catch (error) {
        return false; 
    }
};

const validateLocationId = async (req, res, next) => {
    const locationId = req.body.location_id || req.params.location_id;

    if (!locationId) {
        return res.json({ error: "Location ID is required" });
    }

    if (locations.includes(locationId)) {
        return res.json({ error: `Location ${locationId} already exists` });
    }

    const isValid = await isValidCity(locationId);
    if (!isValid) {
        return res.json({ error: `Invalid city: ${locationId}` });
    }

    req.locationId = locationId; 
    next();
};

module.exports = {
    locations,
    isValidCity,
    validateLocationId
};
