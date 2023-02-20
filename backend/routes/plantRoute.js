const express = require("express");
const { createPlants, getPlants, getPlantDetails } = require("../controllers/plantController");
const router = express.Router();

router.route("/plants").get(getPlants).post(createPlants);
router.route("/plants/:id").get(getPlantDetails);

module.exports = router;