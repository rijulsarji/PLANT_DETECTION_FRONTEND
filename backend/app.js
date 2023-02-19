const express = require("express");

const app = express();
app.use(express.json());

const plantRoute = require("./routes/plantRoute")

app.use("/api/v1", plantRoute)

module.exports = app;