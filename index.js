const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.json());

const locationRoutes = require("./routes/locationroutes");
const weatherRoutes = require("./routes/weatherroutes");
const historyRoutes = require("./routes/historyroutes");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.use("/locations", locationRoutes);
app.use("/weather", weatherRoutes);
app.use("/history", historyRoutes);

app.listen(3030, () => {
    console.log("Server started at 3030");
});


