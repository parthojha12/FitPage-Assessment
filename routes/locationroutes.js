const express = require("express");
const { validateLocationId, isValidCity, locations } = require("../controllers/locationcontroller");
const { getWeatherData } = require("../controllers/weathercontroller")

const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.json(locations);
    })
    .post(validateLocationId, (req, res) => {
        const locationId = req.locationId;
        locations.push(locationId);
        res.json({ message: `Location ${locationId} added successfully` });
    });

router.route("/:location_id")
    .get(async (req, res) => {
        const locationId = req.params.location_id;

        if (!locations.includes(locationId)) {
            return res.json({ error: `Location ${locationId} does not exist. Please add the city first.` });
        }

        try {
            const weatherData = await getWeatherData(locationId);
            res.json(weatherData);
        } catch (error) {
            console.error("Error fetching data", error.message);
            res.send("Internal error");
        }
    })

    .put(validateLocationId, (req, res) => {
        const locationId = req.params.location_id;

        if (!locations.includes(locationId)) {
            return res.json({ error: `Location ${locationId} not found.` });
        }

        const { location_id } = req.body;

        if (!isValidCity(location_id)) {
            return res.json({ error: "Invalid city format for location_id." });
        }

        const index = locations.indexOf(locationId);
        locations[index] = location_id;

        res.json({ message: `Location ${locationId} updated to ${location_id} successfully.` });
    })
    .delete((req, res) => {
        const locationId = req.params.location_id;
        const index = locations.indexOf(locationId);
        if (index === -1) {
            return res.json({ error: `Location ${locationId} not found.` });
        }

        locations.splice(index, 1);
        res.json({ message: `Location ${locationId} deleted successfully.` });
    });

module.exports = router;
