const express = require("express");
const { locations } = require("../controllers/locationcontroller");
const { getWeatherHistory } = require("../controllers/weathercontroller");
const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        const { location_id } = req.body;

        if (!location_id) {
            return res.status(400).json({ error: "Missing location_id in the request body." });
        }

        if (!locations.includes(location_id)) {
            return res.status(400).json({ error: `Location ${location_id} does not exist. Please add the city first.` });
        }

        try {
            const weatherHistory = await getWeatherHistory(location_id);
            res.json(weatherHistory);
        } catch (error) {
            console.error("Error fetching historical data", error.message);
            res.status(500).send("Internal error");
        }
    });

module.exports = router;
