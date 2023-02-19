const express = require("express");
const { getPlants, getPlantDetails } = require("../controllers/plantController");
const router = express.Router();

router.route("/plants").get(getPlants);
router.route("/plants/:id").get(getPlantDetails);

module.exports = router;