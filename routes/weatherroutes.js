const express = require("express");
const { getWeatherData } = require("../controllers/weathercontroller");

const router = express.Router();

router.get("/:location_id", async (req, res) => {
    try {
        const locationId = req.params.location_id;
        const weatherData = await getWeatherData(locationId);
        res.json(weatherData);
    } catch (error) {
        console.error("Error fetching data", error.message);
        res.status(501).send("Error fetching data");
    }
});

module.exports = router;
